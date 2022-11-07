# Create Processes

These are some examples on how to create processes using various APIs.

## Build

To build the C examples on Linux, run `make -f Makefile.linux`.
To build `create_process.c` (on Windows), run `make -f Makefile.win`.

## Running

### `system.c`

This is the most straightforward way to create a process in C.
Just specify the path of the new process, together with all its arguments as a string.

### `posix_spawn.c`

`posix_spawn()` is similar to `system()`, but it's more granular.
Now we can specify the `argv` and `envp` received by the spawned process's `main()` function.

### `create_process.c`

The windows **syscall** `CreateProcess()` is quie similar to the Linxu **library function** `posix_spawn()`.
It receives [(many) more arguments](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessa).
However, the main difference is that in order to run a specific command in the terminal, `CreateProcess()` must also be specified which terminal to use.
In our example, we use the command prompt (`cmd`).
Hence, the first argumetn we give to `CreateProcess()` is `"cmd /s ls"`.

### `fork.c`

`fork()` is the underlying **library call, not system call** that both `system()` and `posix_spawn()` use to create the new process.

Run the code and see how `fork()` returns **twice**.
It creates another process and then returns a different value to each of the two processes:
- it returns 0 to the child process
- it returns the PID of the child process to the parent

### `multiple_forks.c`

Unlike the example in `fork.c`, this one calls `fork()` twice more.
Can you tell how many processes there will be in the end?

Run the code and analyse the process hierarchy using the following output:

```
After first fork: PID = 40700; PPID = 9549
After second fork: PID = 40700; PPID = 9549
After first fork: PID = 40701; PPID = 40700
After second fork: PID = 40702; PPID = 40700
After second fork: PID = 40701; PPID = 40700
After second fork: PID = 40704; PPID = 40701
```

Note that after they're created, the processes act independently.
Therefore, you will to press `Enter` for each newly created process (as prompted by `wait_for_input()`.

Investigate the process hierarchy after each `fork()`.
In the end, it should look like this:

```console
student@os:~/.../lab/support/create-process$ $ pstree -p $(pidof multiple_forks)
multiple_forks(41201)─┬─multiple_forks(41202)─┬─multiple_forks(41230)───multiple_forks(41649)
                      │                       └─multiple_forks(41644)
                      ├─multiple_forks(41225)───multiple_forks(41641)
                      └─multiple_forks(41247)
```
