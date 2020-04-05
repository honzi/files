#pragma once

#define CONFIG_PATH "config/evetools.cfg"
#define KEY_ADDACCOUNT GDK_KEY_t
#define KEY_HIDEWINDOWS GDK_KEY_Escape
#define KEY_REMOVEACCOUNT GDK_KEY_w

GtkWidget *accounts;
GtkWidget *addaccount_account;
GtkWidget *addaccount_password;
GtkWidget *addaccount_window;

void activate(GtkApplication* app, gpointer data);
void add_account(void);
void add_account_by_name(const gchar *name);
int main(int argc, char **argv);
void menu_addaccount(void);
void menu_hide(void);
void menu_removeaccount(void);
void startup(GtkApplication* app, gpointer data);
void update_added_accounts(void);
