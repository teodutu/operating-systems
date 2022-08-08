# Processes Speedup

## Question Text

Why is the speedup from running the program with 1, 2, 4 and 8 processes less than expected?

## Question Answers

- Because the array is split into unequal parts
+ Because of the overhead introduced by the creation of the additional processes
- Because the algorithm is incorrect
- Because the operating systems runs all processes sequentially on the same core

## Feedback

Creating a new process involves an inherent overhead.
You have to call the loader, launch the new process, then wait for it to finish, get its return value etc.
All this work has to be done **sequentially** by the main thread.

It is possible to compute the speedup obtained from parallelising a portion of a given program.
The formula is rather simple and is called [Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law)
