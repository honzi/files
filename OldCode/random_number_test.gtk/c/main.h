#pragma once

GtkTextBuffer *buffer;
char row[52];
GtkWidget *text_view;

gboolean add_row(void* data);
int main(int argc, char **argv);
void startup(GtkApplication* app, gpointer data);
