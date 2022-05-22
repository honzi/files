all: setup

setup: c/main.c
	mkdir -p ~/.iterami
	mkdir -p ~/.iterami/css
	cp ../common/css/gtk.css ~/.iterami/css
	gcc -O3 c/main.c `pkg-config --cflags --libs gtk+-3.0` -o ~/.iterami/random_number_test

clean:
	rm ~/.iterami/random_number_test
