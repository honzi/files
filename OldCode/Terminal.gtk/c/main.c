#include <gtk/gtk.h>
#include "main.h"
#include "../../common/c/core.c"
#include "../../common/c/gtk.c"

void activate(GtkApplication* app, gpointer data){
    gtk_window_present(GTK_WINDOW(window));
}

int main(int argc, char **argv){
    GtkApplication *app;

    app = gtk_application_new(
      "com.iterami.terminalgtk",
      0
    );
    g_signal_connect(
      app,
      "activate",
      G_CALLBACK(activate),
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
    GtkAccelGroup *accelgroup;
    GtkWidget *menubar;
    GtkWidget *menuitem_file;
    GtkWidget *menu_file;
    GtkWidget *outerbox;

    gtk_init_gtk(
      app,
      "Terminal.gtk"
    );

    // Setup menu items.
    menubar = gtk_menu_bar_new();
    accelgroup = gtk_accel_group_new();
    gtk_window_add_accel_group(
      GTK_WINDOW(window),
      accelgroup
    );
    // File menu.
    menu_file = gtk_menu_new();
    menuitem_file = gtk_menu_item_new_with_mnemonic("_File");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_file),
      menu_file
    );
    gtk_add_menuitem(
      menu_file,
      "_Quit",
      accelgroup,
      KEY_QUIT,
      GDK_CONTROL_MASK,
      G_CALLBACK(gtk_widget_destroy),
      window
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_file
    );

    // Add everything to a box and show.
    outerbox = gtk_box_new(
      GTK_ORIENTATION_VERTICAL,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(outerbox),
      menubar,
      FALSE,
      FALSE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(window),
      outerbox
    );
    gtk_widget_show_all(window);
}
