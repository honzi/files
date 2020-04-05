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
      "com.iterami.filebrowsergtk",
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

void places_open_location(GtkWidget *places, GObject *location, GtkPlacesOpenFlags flags, gpointer data){
}

void startup(GtkApplication* app, gpointer data){
    GtkAccelGroup *accelgroup;
    GtkWidget *grid;
    GtkWidget *grid_file;
    GtkWidget *gridscroll;
    GtkWidget *innerbox;
    GtkWidget *menu_file;
    GtkWidget *menubar;
    GtkWidget *menuitem_file;
    GtkWidget *outerbox;
    GtkWidget *places;

    gtk_init_gtk(
      app,
      "FileBrowser.gtk"
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

    // Setup places.
    places = gtk_places_sidebar_new();
    gtk_widget_set_hexpand(
      places,
      FALSE
    );
    gtk_places_sidebar_set_show_desktop(
      GTK_PLACES_SIDEBAR(places),
      TRUE
    );
    gtk_places_sidebar_set_show_recent(
      GTK_PLACES_SIDEBAR(places),
      FALSE
    );
    gtk_places_sidebar_set_show_trash(
      GTK_PLACES_SIDEBAR(places),
      TRUE
    );
    gtk_places_sidebar_set_open_flags(
      GTK_PLACES_SIDEBAR(places),
      GTK_PLACES_OPEN_NORMAL
    );
    g_signal_connect(
      places,
      "open-location",
      G_CALLBACK(places_open_location),
      NULL
    );

    // Setup grid.
    grid = gtk_grid_new();
    gtk_widget_set_name(
      grid,
      "grid"
    );
    gtk_grid_set_column_homogeneous(
      GTK_GRID(grid),
      FALSE
    );
    gtk_grid_set_row_homogeneous(
      GTK_GRID(grid),
      FALSE
    );
    gtk_grid_insert_column(
      GTK_GRID(grid),
      0
    );
    gtk_grid_insert_column(
      GTK_GRID(grid),
      1
    );
    gtk_grid_insert_column(
      GTK_GRID(grid),
      2
    );
    grid_file = gtk_label_new("File");
    gtk_widget_set_halign(
      grid_file,
      GTK_ALIGN_START
    );
    gtk_widget_set_hexpand(
      grid_file,
      TRUE
    );
    gtk_grid_attach(
      GTK_GRID(grid),
      grid_file,
      0,
      0,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(grid),
      gtk_label_new("Size"),
      1,
      0,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(grid),
      gtk_label_new("Modified"),
      2,
      0,
      1,
      1
    );
    gridscroll = gtk_scrolled_window_new(
      NULL,
      NULL
    );
    gtk_scrolled_window_set_policy(
      GTK_SCROLLED_WINDOW(gridscroll),
      GTK_POLICY_AUTOMATIC,
      GTK_POLICY_AUTOMATIC
    );
    gtk_container_add(
      GTK_CONTAINER(gridscroll),
      grid
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
    innerbox = gtk_box_new(
      GTK_ORIENTATION_HORIZONTAL,
      1
    );
    gtk_box_pack_start(
      GTK_BOX(innerbox),
      places,
      FALSE,
      FALSE,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(innerbox),
      gridscroll,
      TRUE,
      TRUE,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(outerbox),
      innerbox,
      TRUE,
      TRUE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(window),
      outerbox
    );
    gtk_widget_show_all(window);
}
