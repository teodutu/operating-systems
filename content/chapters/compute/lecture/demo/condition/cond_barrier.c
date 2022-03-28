// SPDX-License-Identifier: BSD-3-Clause

#define _GNU_SOURCE
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

#include "utils.h"

#define NUM_THREADS 5

struct barrier {
	/* Used access internal fields atomically. */
	pthread_mutex_t lock;

	/* The condition that all threads wait.  */
	pthread_cond_t cond;

	int num_threads;
};

static struct barrier barrier;

static void barrier_init(struct barrier *b, int num_threads)
{
	pthread_mutex_init(&b->lock, NULL);
	pthread_cond_init(&b->cond, NULL);
	b->num_threads = num_threads;
}

static void barrier_destroy(struct barrier *b)
{
	pthread_mutex_destroy(&b->lock);
	pthread_cond_destroy(&b->cond);
}

static void barrier_wait(struct barrier *b)
{
	/* Synchronize accesses to internal data. */
	pthread_mutex_lock(&b->lock);

	b->num_threads--;

	if (b->num_threads == 0)
		/* All threads have arrived. Wake up all of them. */
		pthread_cond_broadcast(&b->cond);
	else
		while (b->num_threads > 0)
			/* The lock is automatically unlocked before waiting. */
			pthread_cond_wait(&b->cond, &b->lock);

	pthread_mutex_unlock(&b->lock);
}

static void *thread_func(void *arg)
{
	pthread_t tid = gettid();

	(void)arg;

	printf("Before barrier: thread ID = %ld\n", tid);

	barrier_wait(&barrier);

	printf("After barrier: thread ID = %ld\n", tid);

	return NULL;
}

int main(void)
{
	int rc;
	void *retval;
	size_t i;
	pthread_t tids[NUM_THREADS];

	barrier_init(&barrier, NUM_THREADS);

	for (i = 0; i < NUM_THREADS; i++) {
		rc = pthread_create(tids + i, NULL, thread_func, NULL);
		DIE(rc < 0, "pthread_create");
	}

	for (i = 0; i < NUM_THREADS; i++) {
		rc = pthread_join(tids[i], &retval);
		DIE(rc < 0, "pthread_create");
	}

	barrier_destroy(&barrier);

	return 0;
}
