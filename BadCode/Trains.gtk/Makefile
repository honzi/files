all: setup

setup: c/main.c
	mkdir -p ~/.iterami
	mkdir -p ~/.iterami/css
	mkdir -p ~/.iterami/data
	cp ../common/css/gtk.css ~/.iterami/css
	cp data/trains.json ~/.iterami/data
	gcc c/main.c `pkg-config --cflags --libs gtk+-3.0` -o ~/.iterami/trains -lGLEW -lGL -lm

clean:
	rm ~/.iterami/trains
	rm ~/.iterami/data/trains.txt
