// SPDX-License-Identifier: BSD-3-Clause

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>

#include "utils.h"

pid_t original_pid;

static void wait_for_input(const char *msg, int fifo_fd)
{
	static int no_fork = 0;
	char buf[32];
	int rc;

	if (getpid() != original_pid) {
		// Wait
		rc = read(fifo_fd, buf, 32);
		DIE(rc < 0, "read");
		return;
	}

	// Format output
	sleep(1);
	printf(" * %s\n", msg);
	printf(" -- Press ENTER to continue ...\n");
	fflush(stdout);
	fgets(buf, 32, stdin);

	// Notify
	no_fork++;
	for (int i=0; i<(1<<no_fork)-1; i++) {
		rc = write(fifo_fd, buf, 32);
		DIE(rc < 0, "write");
	}
}

int main(void)
{
	pid_t pid;
	int rc;
	char *fifo = "multiple_forks_fifo";
	int fifo_fd;
	int exit_code;

	// Mark the original process
	original_pid = getpid();

	// Create named pipe for communication
	unlink(fifo);
	rc = mkfifo(fifo, 0666);
	DIE(rc < 0, "mkfifo");

	fifo_fd = open(fifo, O_RDWR);
	DIE(fifo_fd < 0, "open");

	printf("Initial process: PID = %d\n\n", getpid());

	fork();
	printf("After first fork: PID = %d; PPID = %d\n", getpid(), getppid());
	wait_for_input("first fork()", fifo_fd);

	fork();
	printf("After second fork: PID = %d; PPID = %d\n", getpid(), getppid());
	wait_for_input("second fork()", fifo_fd);

	pid = fork();
	switch (pid) {
	case -1:	/* Error */
		DIE(1, "fork");
		break;

	case 0: 	/* Child process */
		sleep(1);
		printf("[child] PID = %d; PPID = %d\n", getpid(), getppid());

		break;

	default: 	/* Parent process */
		printf("[parent] PID = %d; child PID = %d; Waiting...\n",
			getpid(), pid);

		rc = waitpid(pid, &exit_code, 0);
		DIE(rc < 0, "waitpid");

		break;
	}

	if (getpid() == original_pid) {
		rc = unlink(fifo);
		DIE(rc < 0, "unlink");
	}

	return 0;
}
