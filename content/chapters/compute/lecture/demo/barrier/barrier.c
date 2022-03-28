// SPDX-License-Identifier: BSD-3-Clause

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#include "utils.h"

#define NUM_THREADS 5

#ifdef USE_BARRIER
static pthread_barrier_t barrier;
#endif

static void *thread_func(void *arg)
{
	pthread_t tid = gettid();

	(void)arg;

	printf("Before barrier: thread ID = %ld\n", tid);

#ifdef USE_BARRIER
	pthread_barrier_wait(&barrier);
#endif

	printf("After barrier: thread ID = %ld\n", tid);

	return NULL;
}

int main(void)
{
	int rc;
	void *retval;
	size_t i;
	pthread_t tids[NUM_THREADS];

#ifdef USE_BARRIER
	pthread_barrier_init(&barrier, NULL, NUM_THREADS);
#endif

	for (i = 0; i < NUM_THREADS; i++) {
		rc = pthread_create(tids + i, NULL, thread_func, NULL);
		DIE(rc < 0, "pthread_create");
	}

	for (i = 0; i < NUM_THREADS; i++) {
		rc = pthread_join(tids[i], &retval);
		DIE(rc < 0, "pthread_create");
	}

#ifdef USE_BARRIER
	pthread_barrier_destroy(&barrier);
#endif

	return 0;
}
