DC = dmd
BINARIES = race_condition_mutex_coarse

all: $(BINARIES)

%: %.d
	$(DC) $(DFLAGS) $^ -of=$@

clean:
	-rm -f *.o $(BINARIES)

.PHONY: all clean
