#pragma once

#define KEY_OPEN GDK_KEY_o

void activate(GtkApplication* app, gpointer data);
int main(int argc, char **argv);
void menu_open(void);
void repo_init(void);
void startup(GtkApplication* app, gpointer data);
