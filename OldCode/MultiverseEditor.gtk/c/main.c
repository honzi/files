#include <gtk/gtk.h>
#include <GL/glew.h>
#include "main.h"
#include "../../common/c/core.c"
#include "../../common/c/opengl.c"

void activate(GtkApplication* app, gpointer data){
    gtk_window_present(GTK_WINDOW(window));
}

int main(int argc, char **argv){
    GtkApplication *app;

    app = gtk_application_new(
      "com.iterami.multiverseeditorgtk",
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

void menu_open(void){
    GtkFileChooser *chooser;
    GtkWidget *dialog_open;

    dialog_open = gtk_file_chooser_dialog_new(
      "Open Level...",
      GTK_WINDOW(window),
      GTK_FILE_CHOOSER_ACTION_OPEN,
      "_Cancel",
      GTK_RESPONSE_CANCEL,
      "_Open",
      GTK_RESPONSE_ACCEPT,
      NULL
    );
    chooser = GTK_FILE_CHOOSER(dialog_open);
    gtk_file_chooser_set_show_hidden(
      chooser,
      TRUE
    );

    if(gtk_dialog_run(GTK_DIALOG(dialog_open)) == GTK_RESPONSE_ACCEPT){
        char *filename;

        filename = gtk_file_chooser_get_filename(chooser);
        opengl_load_level(filename);

        g_free(filename);
    }

    gtk_widget_destroy(dialog_open);
}

void repo_init(void){
    opengl_camera_init_free();
    menu_open();
    gtk_begin_frameclock(glarea);
}

void startup(GtkApplication* app, gpointer data){
    GtkAccelGroup *accelgroup;
    GtkWidget *box;
    GtkWidget *menu_camera;
    GtkWidget *menu_file;
    GtkWidget *menu_world;
    GtkWidget *menubar;
    GtkWidget *menuitem_camera;
    GtkWidget *menuitem_file;
    GtkWidget *menuitem_world;

    gtk_init_gtk(
      app,
      "MultiverseEditor.gtk"
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
      "_Open Level...",
      accelgroup,
      KEY_OPEN,
      GDK_CONTROL_MASK,
      G_CALLBACK(menu_open),
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menu_file),
      gtk_separator_menu_item_new()
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
    // Camera menu.
    menu_camera = gtk_menu_new();
    menuitem_camera = gtk_menu_item_new_with_mnemonic("_Camera");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_camera),
      menu_camera
    );
    gtk_add_menuitem(
      menu_camera,
      "_Forward",
      accelgroup,
      KEY_FORWARD,
      0,
      NULL,
      NULL
    );
    gtk_add_menuitem(
      menu_camera,
      "_Left",
      accelgroup,
      KEY_LEFT,
      0,
      NULL,
      NULL
    );
    gtk_add_menuitem(
      menu_camera,
      "_Back",
      accelgroup,
      KEY_BACK,
      0,
      NULL,
      NULL
    );
    gtk_add_menuitem(
      menu_camera,
      "_Right",
      accelgroup,
      KEY_RIGHT,
      0,
      NULL,
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menu_camera),
      gtk_separator_menu_item_new()
    );
    gtk_add_menuitem(
      menu_camera,
      "_Up",
      accelgroup,
      KEY_UP,
      0,
      NULL,
      NULL
    );
    gtk_add_menuitem(
      menu_camera,
      "_Down",
      accelgroup,
      KEY_DOWN,
      0,
      NULL,
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_camera
    );
    // World menu.
    menu_world = gtk_menu_new();
    menuitem_world = gtk_menu_item_new_with_mnemonic("_World");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_world),
      menu_world
    );
    gtk_add_menuitem(
      menu_world,
      "_Origin",
      accelgroup,
      KEY_ORIGIN,
      GDK_CONTROL_MASK,
      G_CALLBACK(opengl_camera_origin),
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_world
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
