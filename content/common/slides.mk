RVMD = reveal-md

.PHONY: all html clean videos

all: videos html

html: _site

_site: slides.md
	$(RVMD) $< --static $@

videos:
	for TARGET in $(TARGETS); do \
		ffmpeg -framerate 0.5 -f image2 -y \
			-i "media/$$TARGET/$$TARGET-%d.svg" media/$$TARGET-generated.gif; \
	done

clean:
	-rm -f media/*-generated.gif
	-rm -f *~
	-rm -fr _site
