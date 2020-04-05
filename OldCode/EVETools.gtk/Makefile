all: setup

setup: c/main.c
	mkdir -p ~/.iterami
	mkdir -p ~/.iterami/config
	mkdir -p ~/.iterami/css
	touch ~/.iterami/config/evetools.cfg
	cp ../common/css/gtk.css ~/.iterami/css
	gcc c/main.c `pkg-config --cflags --libs gtk+-3.0` -o ~/.iterami/evetools

clean:
	rm ~/.iterami/evetools
	rm ~/.iterami/config/evetools.cfg
