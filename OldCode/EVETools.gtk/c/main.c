#include <gtk/gtk.h>
#include "main.h"
#include "../../common/c/core.c"
#include "../../common/c/gtk.c"

void activate(GtkApplication* app, gpointer data){
    gtk_window_present(GTK_WINDOW(window));
}

void add_account(void){
    gtk_widget_hide(addaccount_window);

    add_account_by_name(gtk_entry_get_text(GTK_ENTRY(addaccount_account)));

    update_added_accounts();
}

void add_account_by_name(const gchar *name){
    GtkWidget *account_label;

    account_label = gtk_label_new(name);
    gtk_label_set_xalign(
      GTK_LABEL(account_label),
      0
    );
    gtk_list_box_insert(
      GTK_LIST_BOX(accounts),
      account_label,
      -1
    );
    gtk_widget_show_all(account_label);

    gtk_entry_set_text(
      GTK_ENTRY(addaccount_account),
      ""
    );
    gtk_entry_set_text(
      GTK_ENTRY(addaccount_password),
      ""
    );
}

int main(int argc, char **argv){
    GtkApplication *app;

    app = gtk_application_new(
      "com.iterami.evetoolsgtk",
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

void menu_addaccount(void){
    gtk_widget_show_all(addaccount_window);
    gtk_window_present(GTK_WINDOW(addaccount_window));
}

void menu_hide(void){
    gtk_widget_hide(addaccount_window);
}

void menu_removeaccount(void){
    GtkListBoxRow *row;

    row = gtk_list_box_get_selected_row(GTK_LIST_BOX(accounts));

    if(row){
        gtk_container_remove(
          GTK_CONTAINER(accounts),
          GTK_WIDGET(row)
        );

        update_added_accounts();
    }
}

void startup(GtkApplication* app, gpointer data){
    GtkAccelGroup *accelgroup;
    GtkWidget *accountsbox;
    GtkWidget *addaccount;
    GtkWidget *box;
    GtkWidget *menu_account;
    GtkWidget *menu_file;
    GtkWidget *menubar;
    GtkWidget *menuitem_account;
    GtkWidget *menuitem_file;
    GtkWidget *tools;

    gtk_init_gtk(
      app,
      "EVETools.gtk"
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
      "_Hide Windows",
      accelgroup,
      KEY_HIDEWINDOWS,
      0,
      G_CALLBACK(menu_hide),
      NULL
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
    // Account menu.
    menu_account = gtk_menu_new();
    menuitem_account = gtk_menu_item_new_with_mnemonic("_Account");
    gtk_menu_item_set_submenu(
      GTK_MENU_ITEM(menuitem_account),
      menu_account
    );
    gtk_add_menuitem(
      menu_account,
      "_Login",
      accelgroup,
      GDK_KEY_Return,
      0,
      NULL,
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menu_account),
      gtk_separator_menu_item_new()
    );
    gtk_add_menuitem(
      menu_account,
      "_Add Account...",
      accelgroup,
      KEY_ADDACCOUNT,
      GDK_CONTROL_MASK,
      G_CALLBACK(menu_addaccount),
      NULL
    );
    gtk_add_menuitem(
      menu_account,
      "_Remove Account",
      accelgroup,
      KEY_REMOVEACCOUNT,
      GDK_CONTROL_MASK,
      G_CALLBACK(menu_removeaccount),
      NULL
    );
    gtk_menu_shell_append(
      GTK_MENU_SHELL(menubar),
      menuitem_account
    );

    // Setup accounts list box.
    accounts = gtk_list_box_new();
    gtk_widget_set_size_request(
      accounts,
      0,
      150
    );
    gtk_list_box_set_selection_mode(
      GTK_LIST_BOX(accounts),
      GTK_SELECTION_BROWSE
    );

    // Setup tools grid.
    tools = gtk_grid_new();
    gtk_grid_set_column_homogeneous(
      GTK_GRID(tools),
      TRUE
    );
    gtk_grid_set_row_homogeneous(
      GTK_GRID(tools),
      FALSE
    );
    gtk_grid_insert_column(
      GTK_GRID(tools),
      0
    );
    gtk_grid_insert_column(
      GTK_GRID(tools),
      1
    );
    gtk_grid_insert_column(
      GTK_GRID(tools),
      2
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      0,
      0,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      1,
      0,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      2,
      0,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      0,
      1,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      1,
      1,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      2,
      1,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      0,
      2,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      1,
      2,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      2,
      2,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      0,
      3,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      1,
      3,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      2,
      3,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      0,
      4,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      1,
      4,
      1,
      1
    );
    gtk_grid_attach(
      GTK_GRID(tools),
      gtk_entry_new(),
      2,
      4,
      1,
      1
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
    gtk_box_pack_start(
      GTK_BOX(box),
      accounts,
      FALSE,
      FALSE,
      0
    );
    gtk_box_pack_start(
      GTK_BOX(box),
      tools,
      TRUE,
      TRUE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(window),
      box
    );
    gtk_widget_show_all(window);

    // Setup add account window.
    addaccount_window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_add_accel_group(
      GTK_WINDOW(addaccount_window),
      accelgroup
    );
    gtk_window_set_default_size(
      GTK_WINDOW(addaccount_window),
      300,
      0
    );
    gtk_window_set_title(
      GTK_WINDOW(addaccount_window),
      "Add Account..."
    );
    gtk_window_set_attached_to(
      GTK_WINDOW(addaccount_window),
      window
    );
    gtk_window_set_transient_for(
      GTK_WINDOW(addaccount_window),
      GTK_WINDOW(window)
    );
    gtk_window_set_type_hint(
      GTK_WINDOW(addaccount_window),
      GDK_WINDOW_TYPE_HINT_DIALOG
    );
    accountsbox = gtk_box_new(
      GTK_ORIENTATION_VERTICAL,
      0
    );
    addaccount_account = gtk_entry_new();
    gtk_entry_set_placeholder_text(
      GTK_ENTRY(addaccount_account),
      "Username"
    );
    gtk_box_pack_start(
      GTK_BOX(accountsbox),
      addaccount_account,
      FALSE,
      FALSE,
      0
    );
    addaccount_password = gtk_entry_new();
    gtk_entry_set_placeholder_text(
      GTK_ENTRY(addaccount_password),
      "Password"
    );
    gtk_entry_set_input_purpose(
      GTK_ENTRY(addaccount_password),
      GTK_INPUT_PURPOSE_PASSWORD
    );
    gtk_entry_set_visibility(
      GTK_ENTRY(addaccount_password),
      FALSE
    );
    gtk_box_pack_start(
      GTK_BOX(accountsbox),
      addaccount_password,
      FALSE,
      FALSE,
      0
    );
    addaccount = gtk_button_new_with_mnemonic("Add Account");
    gtk_box_pack_start(
      GTK_BOX(accountsbox),
      addaccount,
      FALSE,
      FALSE,
      0
    );
    gtk_container_add(
      GTK_CONTAINER(addaccount_window),
      accountsbox
    );
    g_signal_connect_swapped(
      addaccount_window,
      "delete-event",
      G_CALLBACK(gtk_widget_hide_on_delete),
      addaccount_window
    );
    g_signal_connect(
      addaccount,
      "clicked",
      G_CALLBACK(add_account),
      NULL
    );

    // Add previously added accounts.
    gchar *temp_path = core_iterami_path(CONFIG_PATH);
    gchar *temp_content;
    gssize temp_length;

    if(g_file_get_contents(
      temp_path,
      &temp_content,
      &temp_length,
      NULL
    )){
        GtkTextIter temp_end;
        GtkTextIter temp_start;
        GtkTextBuffer *temp_buffer;
        GtkWidget *temp_text_view;

        temp_buffer = gtk_text_buffer_new(NULL);
        temp_text_view = gtk_text_view_new_with_buffer(temp_buffer);
        gtk_text_buffer_set_text(
          temp_buffer,
          temp_content,
          temp_length
        );

        int lines = gtk_text_buffer_get_line_count(temp_buffer);
        int line = 0;
        while(line < lines){
            gtk_text_buffer_get_iter_at_line(
              temp_buffer,
              &temp_start,
              line++
            );
            gtk_text_buffer_get_iter_at_line(
              temp_buffer,
              &temp_end,
              line
            );
            if(gtk_text_iter_backward_char(&temp_end)){
                char *accountname;

                accountname = gtk_text_buffer_get_text(
                  temp_buffer,
                  &temp_start,
                  &temp_end,
                  FALSE
                );
                add_account_by_name(accountname);

                g_free(accountname);
            }
        }

        gtk_widget_destroy(temp_text_view);
    }

    g_free(temp_path);
    g_free(temp_content);
}

void update_added_accounts(void){
    int row = 0;
    gchar *content;
    GtkListBoxRow *rowwidget;
    GtkTextBuffer *buffer;
    GtkTextIter end;
    GtkTextIter start;
    GtkWidget *temp_text_view;

    buffer = gtk_text_buffer_new(NULL);
    temp_text_view = gtk_text_view_new_with_buffer(buffer);

    while(TRUE){
        rowwidget = gtk_list_box_get_row_at_index(
          GTK_LIST_BOX(accounts),
          row
        );
        if(rowwidget == NULL){
            break;
        }

        gtk_text_buffer_get_end_iter(
          buffer,
          &end
        );

        gtk_text_buffer_insert(
          buffer,
          &end,
          gtk_label_get_text(GTK_LABEL(gtk_bin_get_child(GTK_BIN(rowwidget)))),
          -1
        );
        gtk_text_buffer_insert(
          buffer,
          &end,
          "\n",
          1
        );

        row++;
    }

    gtk_text_buffer_get_bounds(
      buffer,
      &start,
      &end
    );

    content = gtk_text_buffer_get_text(
      buffer,
      &start,
      &end,
      FALSE
    );
    gchar *path = core_iterami_path(CONFIG_PATH);
    g_file_set_contents(
      path,
      content,
      -1,
      NULL
    );
    g_free(content);
    g_free(path);

    gtk_widget_destroy(temp_text_view);
}
