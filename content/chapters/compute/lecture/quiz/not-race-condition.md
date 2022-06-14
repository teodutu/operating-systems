## Question Text

What type of parallel actions never cause race conditions?

## Question Answers

- Only reads.
- Reads and writes.
+ Reads and executions.
- All parallel actions can cause race conditions

## Feedback

Race conditions only appear when 2 or more threads **write** data to the same address in parallel.
Other types of access (read and execute) do not modify the data, thus they do not cause race conditions.
