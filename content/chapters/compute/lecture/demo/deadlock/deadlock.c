// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

#include "utils.h"

static pthread_mutex_t resource_1 = PTHREAD_MUTEX_INITIALIZER;
static pthread_mutex_t resource_2 = PTHREAD_MUTEX_INITIALIZER;

static void *thread_1(void *arg)
{
	int rc;

	(void)arg;

	rc = pthread_mutex_lock(&resource_1);
	DIE(rc, "pthread_mutex_lock");
	printf("Thread 1: locked resource 1. Waiting for resource 2...\n");

	sleep(5);

	rc = pthread_mutex_lock(&resource_2);
	DIE(rc, "pthread_mutex_lock");
	printf("Thread 1: locked resource 2\n");

	rc = pthread_mutex_unlock(&resource_1);
	DIE(rc, "pthread_mutex_unlock");
	printf("Thread 1: unlocked resource 1\n");

	rc = pthread_mutex_unlock(&resource_2);
	DIE(rc, "pthread_mutex_unlock");
	printf("Thread 1: unlocked resource 2\n");

	return NULL;
}

static void *thread_2(void *arg)
{
	int rc;

	(void)arg;

	rc = pthread_mutex_lock(&resource_2);
	DIE(rc, "pthread_mutex_lock");
	printf("Thread 2: locked resource 2. Waiting for resource 1...\n");

	sleep(5);

	rc = pthread_mutex_lock(&resource_1);
	DIE(rc, "pthread_mutex_lock");
	printf("Thread 2: locked resource 2\n");

	rc = pthread_mutex_unlock(&resource_2);
	DIE(rc, "pthread_mutex_unlock");
	printf("Thread 2: unlocked resource 2\n");

	rc = pthread_mutex_unlock(&resource_1);
	DIE(rc, "pthread_mutex_unlock");
	printf("Thread 2: unlocked resource 1\n");

	return NULL;
}

int main(void)
{
	int rc;
	pthread_t tid_1;
	pthread_t tid_2;
	void *status;

	rc = pthread_create(&tid_1, NULL, thread_1, NULL);
	DIE(rc, "pthread_create");

	rc = pthread_create(&tid_2, NULL, thread_2, NULL);
	DIE(rc, "pthread_create");

	rc = pthread_join(tid_1, &status);
	DIE(rc, "pthread_join");
	rc = pthread_join(tid_2, &status);
	DIE(rc, "pthread_join");

	return 0;
}
