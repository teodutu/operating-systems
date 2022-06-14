## Question Text

The pages of which sections in the VAS are **always** shared between the parent and child process?

## Question Answers

- None, because they are marked copy-on-write.
- Kernel pages because there is only one kernel.
+ Non-writalbe sections, such as `.text` or `.rodata`.
- `libc` pages, because it is a shared library and all processes refer the same memory. 

## Feedback

The name of the mechanism is copy-on-**wite**.
Pages oare only copied when written to.
If you never write data to a page, it will remain shared.
You cannot write data to non-writ non-writalbe pages, such as those in the `.text` or `.rodata` sections.
