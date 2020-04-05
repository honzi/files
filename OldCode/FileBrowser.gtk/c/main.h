#pragma once

void activate(GtkApplication* app, gpointer data);
int main(int argc, char **argv);
void places_open_location(GtkWidget *places, GObject *location, GtkPlacesOpenFlags flags, gpointer data);
void startup(GtkApplication* app, gpointer data);
