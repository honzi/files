#include <gtk/gtk.h>
#include <GL/glew.h>
#include "main.h"
#include "../../common/c/core.c"
#include "../../common/c/opengl.c"

void activate(GtkApplication* app, gpointer data){
    GtkAccelGroup *accelgroup;
    GtkWidget *box;
    GtkWidget *menubar;
    GtkWidget *menuitem_camera;
    GtkWidget *menuitem_camera_back;
    GtkWidget *menuitem_camera_down;
    GtkWidget *menuitem_camera_forward;
    GtkWidget *menuitem_camera_left;
    GtkWidget *menuitem_camera_right;
    GtkWidget *menuitem_camera_up;
    GtkWidget *menuitem_file;
    GtkWidget *menuitem_file_quit;
    GtkWidget *menuitem_world;
    GtkWidget *menuitem_world_origin;
    GtkWidget *menumenu_camera;
    GtkWidget *menumenu_file;
    GtkWidget *menumenu_world;

    gtk_init_gtk(
      app,
      "Trains.gtk"
    );

    // Setup menu items.
    menubar = gtk_menu_bar_new();
    accelgroup = gtk_accel_group_new();
    gtk_window_add_accel_group(
      GTK_WINDOW(window),
      accelgroup
    );
    // File menu.
    menumenu_file = gtk_menu_new();
    menuitem_file = gtk_menu_item_new_with_mnemonic("_File");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_file),
      menumenu_file
    );
    menuitem_file_quit = gtk_add_menuitem(
      menumenu_file,
      "_Quit",
      accelgroup,
      KEY_QUIT,
      GDK_CONTROL_MASK
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_file
    );
    // Camera menu.
    menumenu_camera = gtk_menu_new();
    menuitem_camera = gtk_menu_item_new_with_mnemonic("_Camera");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_camera),
      menumenu_camera
    );
    menuitem_camera_forward = gtk_add_menuitem(
      menumenu_camera,
      "_Forward",
      accelgroup,
      KEY_FORWARD,
      0
    );
    menuitem_camera_left = gtk_add_menuitem(
      menumenu_camera,
      "_Left",
      accelgroup,
      KEY_LEFT,
      0
    );
    menuitem_camera_back = gtk_add_menuitem(
      menumenu_camera,
      "_Back",
      accelgroup,
      KEY_BACK,
      0
    );
    menuitem_camera_right = gtk_add_menuitem(
      menumenu_camera,
      "_Right",
      accelgroup,
      KEY_RIGHT,
      0
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menumenu_camera),
      gtk_separator_menu_item_new()
    );
    menuitem_camera_up = gtk_add_menuitem(
      menumenu_camera,
      "_Up",
      accelgroup,
      KEY_UP,
      0
    );
    menuitem_camera_down = gtk_add_menuitem(
      menumenu_camera,
      "_Down",
      accelgroup,
      KEY_DOWN,
      0
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_camera
    );
    // World menu.
    menumenu_world = gtk_menu_new();
    menuitem_world = gtk_menu_item_new_with_mnemonic("_World");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_world),
      menumenu_world
    );
    menuitem_world_origin = gtk_add_menuitem(
      menumenu_world,
      "_Origin",
      accelgroup,
      KEY_ORIGIN,
      GDK_CONTROL_MASK
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_world
    );

    // Setup menu item callbacks.
    g_signal_connect_swapped(
      menuitem_file_quit,
      "activate",
      G_CALLBACK(gtk_widget_destroy),
      window
    );
    g_signal_connect_swapped(
      menuitem_world_origin,
      "activate",
      G_CALLBACK(opengl_camera_origin),
      NULL
    );

    // Disable nonfunctional menu items.
    gtk_widget_set_sensitive(
      menuitem_camera_back,
      FALSE
    );
    gtk_widget_set_sensitive(
      menuitem_camera_down,
      FALSE
    );
    gtk_widget_set_sensitive(
      menuitem_camera_forward,
      FALSE
    );
    gtk_widget_set_sensitive(
      menuitem_camera_left,
      FALSE
    );
    gtk_widget_set_sensitive(
      menuitem_camera_right,
      FALSE
    );
    gtk_widget_set_sensitive(
      menuitem_camera_up,
      FALSE
    );

    // Add everything to a box and show.
    box = gtk_box_new(
      GTK_ORIENTATION_VERTICAL,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(box),
      menubar,
      FALSE,
      FALSE,
      0
    );
    glarea = gtk_gl_area_new();
    gtk_box_pack_start(
      GTK_BOX(box),
      glarea,
      TRUE,
      TRUE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(window),
      box
    );

    opengl_events_init(glarea);

    gtk_widget_show_all(window);
}

int main(int argc, char **argv){
    GtkApplication *app;

    app = gtk_application_new(
      "com.iterami.trainsgtk",
      0
    );
    g_signal_connect(
      app,
      "activate",
      G_CALLBACK(activate),
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

void repo_init(void){
    opengl_camera_init_free();
    opengl_load_level(core_iterami_path(LEVEL_PATH));
    gtk_begin_frameclock(glarea);
}
