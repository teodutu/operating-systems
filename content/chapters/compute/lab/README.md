# Compute

The main criterion we use to rank CPUs is their _computation power_, i.e. their ability to crunch numbers and do math.
Numerous benchmarks exist out there and they are publicly displayed on websites such as [CPUBenchmark](https://www.cpubenchmark.net/).

This benchmark measures the performance of the computer's CPU in a variety of scenarios:
- its ability to perform integer operations
- its speed in floating point arithmetic
- data encryption and compression
- sorting algorithms and others

You can take a look at what exactly is measured using [this link](https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+Threadripper+PRO+5995WX).
It displays the scores obrtained by a high-end CPU.
Apart from the tests above, other benchmarks can also focus on other performance metrics such as branch prediction or prefetching.

Other approaches are less artificial, measuring performance on real-world applications such as compile times and performance in the lastest (and most resource-demandign) video games.
The latter metric revolves around how many average FPS (frames per second) a given CPU is able to crank out in a specific video game.
[This article](https://www.gamersnexus.net/guides/3577-cpu-test-methodology-unveil-for-2020-compile-gaming-more) goes into more detail regarding the methodology of running CPU benchmarks on real-world applications.

Most benchmarks, unfortunately, are not open source, especially the more popular ones, such as [Geekbench 5](https://browser.geekbench.com/processor-benchmarks).
Despite this shortcoming, benchmarks are widely used to compare the performance of various computer **hardware**, CPUs included.

## The Role of the Operating System

As you've seen so far, the CPU provides the "muscle" requried for fast computation. i.e. the highly optimised hardware and multiple ALUs, FPUs
and cores necessary to perform those computations.
However, it is the **operating system** that provides the "brains" for this computation.
Specifically, modern CPUs have the capacity to run multiple tasks in parallel.
But they do not provide a means to decide which task to run at each moment.
The OS comes as an _orchestrator_ to **schedule** the way these tasks (that we will later call threads) are allowed to run and use the CPU's resources.
This way OS tells the CPU what code to run on each CPU core so that it reaches a good balance between high throughput (running many instructions) and fair access to CPU cores.

It is cumbersome for a user-level application to interact directly with the CPU.
The developer would have to write hardware-specific code which is not scalable and is difficult to maintain.
In addition, doing so would leave it up to the developer to isolate their application from the others that are present on the system.
This leaves applications vulnerable to countless bugs and exploits.

To guard apps from these pitfalls, the OS comes and mediates interactions between regular programs and the CPU by providing a set of **abstractions**.
These abstractions offer a safe, uniform and also isolated way to leverage the CPU's resources, i.e. its cores.
There are 2 main abstractions: **processes** and **threads**.

![Interaction between applications, OS and CPU](./media/app-os-cpu-interaction.svg)

As we can see from the image above, an application can spawn one or more processes.
Each of these is handled and maintained by the OS.
Similarly, each process can spawn however many threads, which are also managed by the OS.
The OS decides when and on what CPU core to make each thread run.
This is in line with the general of interaction between an application and the hardware: it is always mediated by the OS.

## Processes

A process is simply a running program.
Let's take the `ls` command as a trivial example.
`ls` is a **program** on your system.
It has a binary file which you can find and inspect with the help of the `which` command:

```
student@os:~$ which ls
/usr/bin/ls

student@os:~$ file /usr/bin/ls
/usr/bin/ls: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=6e3da6f0bc36b6398b8651bbc2e08831a21a90da, for GNU/Linux 3.2.0, stripped
```

When you run it, the `ls` binary stored **on the disk** at `/usr/bin/ls` is read by another application called the **loader**.
The loader spawns a **process** by copying some of the contents `/usr/bin/ls` in memory (such as the `.text`, `.rodata` and `.data` sections).
Using `strace`, we can see the [`execve`](https://man7.org/linux/man-pages/man2/execve.2.html) system call:
```
student@os:~$ strace -s 100 ls -a  # -s 100 limits strings to 100 bytes instead of the default 32
execve("/usr/bin/ls", ["ls", "-a"], 0x7fffa7e0d008 /* 61 vars */) = 0
[...]
write(1, ".  ..  content\tCONTRIBUTING.md  COPYING.md  .git  .gitignore  README.md  REVIEWING.md\n", 86.  ..  content	CONTRIBUTING.md  COPYING.md  .git  .gitignore  README.md  REVIEWING.md
) = 86
close(1)                                = 0
close(2)                                = 0
exit_group(0)                           = ?
+++ exited with 0 +++
```
Look at its parameters:
- the path to the **program**: `/usr/bin/ls`
- the list of arguments: `"ls", "-a"`
- the enivronment variables: the rest of the syscall's arguments

`execve` invokes the loader to create the `ls` process.
All subsequent syscalls are performed by the newly spawned `ls` process.
We will get into more details regarding `execve` [towards the end of this lab](#TODO-section).

TODO - image: creation of a process - loader

## Sum of the Elements in an Array

Let's assume we only have one process on our system and that process knows how to add the numbers in an array.
It can use however many resources it wants since there is no other process to contest it.
It would probabily look like the code in `support/sum-array/d/sum_array_sequential.d`.
The program also measures the time spent computing the sum.
Let's compile and run it:

```
student@os:~/.../lab/support/sum-array/d/$

student@os:~$ ./sum_array_sequential
Array sum is: 49945994146
Time spent: 127 ms
```

You will most likely get a different sum (because the array is made up of random numbers) and a different time than the ones shown above.
This is perfectly fine.
Use these examples qualitatively, not quantitatively.

### Spreading the Work Among Other Processes

Due to how it's implemented so far, our program only uses one of our CPU's cores.
We never tell it to distribute its workload on other cores.
This is wasteful as the rest of our cores remain unused:

```
student@os:~$ lscpu | grep ^CPU\(s\):
CPU(s):                          8
```
We have 7 more cores waiting to add numbers in our array.

![What if we used 100% of the CPU?](./media/100-percent-cpu.jpeg)

What if we use 7 more processes between which we spread the task of adding the numbers in this array?
If we split the array into several equal parts and designate a separate process to calculate the sum of each part, we should get a speedup because now the work performed by each individual process is reduced.

Let's take it methodically.
Compile and run `sum_array_processes.d` using 1, 2, 4 and 8 processes respectively.
Note the running times for each number of processes.
We expect the speedups compared to our reference run to be 1, 2, 4 and 8 respectively, right?

[Quiz](./quiz/processes-speedup.md)

You most likely did get some speedup, especially when using 8 processes.
Now we will try to improve this speedup by using **threads** instead.

### Spreading the Work Among Other Threads

Compile the code in `sum_array_threads.d` and run it using 1, 2, 4 and 8 threads as you did before.
Each thread runs the `calculateArrayPartSum` function and then finishes.
Running times should be _slightly_ smaller than the implementation using processes.

The reason is that the time required to create a process is longer than that required to create a thread.
Because a process needs a separate virtual address space (VAS) and needs to duplicate some internal structures such as the file descriptor table and page table, it takes the operating system more time to create it than to create a thread.
On the other hand, threads belonging to the same process share the same VAS and, implicitly, the same OS-internal structures.
Therefore, they are more lightweight than processes.

### Threads vs Processes

So why use the implementation that spawns more processes if it's slower than the one using threads?

TODO: security, isolation, separate tasks

## Arena

### Threads and Processes: `clone`

Let's go back to our initial demos that used threads and processes.
We'll see that in order to create both threads and processes, the underlying Linux syscall is `clone`.
For this, we'll run both `sum_array_threads` and `sum_array_processes` under `strace`.
As we've already established, we're only interested in the `clone` syscall:
```
student@os:~/.../lab/support/sum-array/d/$ strace -e clone ./sum_array_threads 2
clone(child_stack=0x7f60b56482b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819693], tls=0x7f60b5649640, child_tidptr=0x7f60b5649910) = 1819693
clone(child_stack=0x7f60b4e472b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819694], tls=0x7f60b4e48640, child_tidptr=0x7f60b4e48910) = 1819694

student@os:~/.../lab/support/sum-array/d/$ strace -e clone ./sum_array_processes 2
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820599
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820600
```

We ran each program with an argument of 2, so we have 2 calls to `clone`.
Notice that in the case of threads, the `clone` syscall receives more arguments.
The relevant flags passed as arguments when creating threads are documented in [`clone`'s man page](https://man.archlinux.org/man/clone3.2.en):
- `CLONE_VM`: the child and the parent process share the same VAS
- `CLONE_{FS,FILES,SIGHAND}`: the new thread shares the filesystem information, file and signal handlers with the one that created it
The syscall also receives valid pointers to the new thread's stack and TLS, i.e. the only parts of the VAS that are distinct between threads (although they are technically accessible from all threads).

By contrast, when creating a new process, the arguments of the `clone` syscall are simpler (i.e. fewer flags are present).
Remember that in both cases `clone` creates a new **thread**.
When creating a process, `clone` creates this new thread within a new separate address space.

### Libraries for Parallel Processing

In `support/sum-array/d/sum_array_threads.d` we spawned threads "manually" by using the `spawn` function.
This is **not** a syscall, but a wrapper over the most common thread-management API in POSIX-based operating systems (such as Linux, FreeBSD, macOS): POSIX Threads or `pthreads`.
Using `ltrace`, we can see that `spawn` calls `pthread_create` in order to spawn the new thread.
In order to see what syscall `pthread_create` uses, check out [this section at the end of the lab](#threads-and-processes-clone).

Most programming languages provide a more advanced API for handling parallel computation.
D makes no exception.
Its standard library exposes the [`std.parallelism`](https://dlang.org/phobos/std_parallelism.html), which provides a series of parallel processing functions.
One such function is `reduce` which splits an array between a given number of threads and applies a given operation to these chunks.
In our case, the operation simply adds the elements to an accumulator: `a + b`.
Follow and run the code in `sum_array_threads_reduce.d`.

The number of threads is used within a [`TaskPool`](https://dlang.org/phobos/std_parallelism.html#.TaskPool).
This sturcture is a thread manager (not scheduler).
It silently creates the number of threads we request and then `reduce` spreads its workload between these threads.

Now run the `sum_array_threads_reduce` binary using 1, 2, 4, and 8 threads as before.
You'll see lower running times than `sum_array_threads` due to the highly-optimised code of the `reduce` function.
For this reason and because library functions are usually much better tested than your own code, it is always preferred to use a library function for a given task.
