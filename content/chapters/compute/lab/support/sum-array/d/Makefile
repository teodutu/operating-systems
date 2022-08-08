DC = dmd
DFLAGS = -unittest -main
GEN_ARRAY = generate_random_array.d
BINARIES = sum_array_sequential sum_array_threads sum_array_processes sum_array_threads_reduce

all: $(BINARIES)

%: %.d $(GEN_ARRAY)
	$(DC) $(DFLAGS) $^ -of=$@

clean:
	-rm -f *.o $(BINARIES)

.PHONY: all clean
