DC = dmd
BINARY = wait_for_me_threads

all: $(BINARY)

%: %.d
	$(DC) $^ -of=$@

clean:
	-rm -f *.o $(BINARY)

.PHONY: all clean
