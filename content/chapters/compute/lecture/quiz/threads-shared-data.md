## Question Text

Where cannot we place data shared by threads?

## Question Answers

- On the heap.
- In the `.rodata` section.
+ On the stack.
- In the `.text` section.

## Feedback

Each thread as its own separate thread.
Every other section is shared with the other threads.
Data can also be stored in the `.text` section, albeit this is a bit unorthodox.
