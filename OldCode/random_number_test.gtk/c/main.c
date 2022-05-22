#include <gtk/gtk.h>
#include <stdlib.h>
#include "main.h"
#include "../../common/c/core.c"
#include "../../common/c/gtk.c"
#include "../../common/c/random.c"

gboolean add_row(void* data){
    int i;
    for(i = 0; i < 50; i++){
        int random_number = random_integer(42) + 48;
        row[i] = (char)random_number;
    }

    GtkTextIter end;

    gtk_text_buffer_get_end_iter(
      buffer,
      &end
    );
    gtk_text_buffer_insert(
      buffer,
      &end,
      row,
      51
    );

    return TRUE;
}

int main(int argc, char **argv){
    GtkApplication *app;

    app = gtk_application_new(
      "com.iterami.random_number_test",
      0
    );
    g_signal_connect(
      app,
      "activate",
      G_CALLBACK(gtk_activate),
      NULL
    );
    g_signal_connect(
      app,
      "startup",
      G_CALLBACK(startup),
      NULL
    );
    int status = g_application_run(
      G_APPLICATION(app),
      argc,
      argv
    );
    g_object_unref(app);

    return status;
}

void startup(GtkApplication* app, gpointer data){
    GtkWidget *box;
    GtkWidget *scrolled_window;

    gtk_init_gtk(
      app,
      "random_number_test.gtk"
    );
    random_seed(
      0,
      0
    );

    // Create text view.
    buffer = gtk_text_buffer_new(NULL);
    text_view = gtk_text_view_new_with_buffer(buffer);
    gtk_text_view_set_wrap_mode(
      GTK_TEXT_VIEW(text_view),
      GTK_WRAP_WORD
    );
    gtk_text_view_set_editable(
      GTK_TEXT_VIEW(text_view),
      FALSE
    );
    scrolled_window = gtk_scrolled_window_new(
      NULL,
      NULL
    );
    gtk_scrolled_window_set_policy(
      GTK_SCROLLED_WINDOW(scrolled_window),
      GTK_POLICY_AUTOMATIC,
      GTK_POLICY_AUTOMATIC
    );
    gtk_container_add(
      GTK_CONTAINER(scrolled_window),
      text_view
    );

    // Add everything to a box and show.
    box = gtk_box_new(
      GTK_ORIENTATION_VERTICAL,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(box),
      scrolled_window,
      TRUE,
      TRUE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(window),
      box
    );
    gtk_widget_show_all(window);

    row[50] = '\n';
    row[51] = '\0';

    g_timeout_add_seconds(
      1,
      add_row,
      NULL
    );
}
