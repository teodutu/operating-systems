#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	/* TODO 1: Create one `sleep 1000` process using `system`. */
	system("sleep 1");
	puts("Parent process ending.");
	return 0;
}
