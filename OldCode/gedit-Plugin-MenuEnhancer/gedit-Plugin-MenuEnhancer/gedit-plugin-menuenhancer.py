#!/usr/bin/env python3

from gi.repository import Gedit, GObject, Gtk

class gedit_plugin_menuenhancer_window(GObject.Object, Gedit.WindowActivatable):
    __gtype_name__ = 'gedit_plugin_menuenhancer_window'
    window = GObject.property(type = Gedit.Window)

    def __init__(self):
        GObject.Object.__init__(self)
        self._groups = []
        self._ui = []

    def action_menuitem_file_newwindow(self, action):
        app = Gedit.App.get_default()
        new_window = app.create_window(None)
        new_window.show()
        new_window.create_tab(True)
        self.attach_menu_to_window()

    def attach_menu_to_window(self):
        app = Gedit.App.get_default()
        windows = app.get_windows()
        target_window = windows[0]
        manager = target_window.get_ui_manager()
        _new_group = Gtk.ActionGroup('gedit_plugin_menuenhancer-actions')
        _new_group.add_actions([
          ('gedit_Plugin_MenuEnhancer_NewWindow', Gtk.STOCK_ADD, _('New Window'),
            '<ctrl><shift>n', _('Open a new gedit window.'),
            self.action_menuitem_file_newwindow),
        ])
        manager.insert_action_group(_new_group, -1)
        self._groups.append(_new_group)
        _menuxml = """
<menubar name="MenuBar">
  <menu name="FileMenu" action="File">
    <placeholder name="FileOps_2">
      <menuitem action="gedit_Plugin_MenuEnhancer_NewWindow"/>
    </placeholder>
  </menu>
</menubar>
"""
        self._ui.append(manager.add_ui_from_string(_menuxml))
    
    def do_activate(self):
        app = Gedit.App.get_default()
        if len(app.get_windows()) > 0:
            self.attach_menu_to_window()
        else:
            self._handler_load = self.window.connect('show', self.show)

    def do_deactivate(self):
        manager = self.window.get_ui_manager()
        for _group in self._groups:
            manager.remove_action_group(_group)# BUG: groups aren't getting removed
        for _ui in self._ui:
            manager.remove_ui(_ui)
        manager.ensure_update()

    def do_update_state(self):
        pass

    def show(self, window, data = None):
        self.attach_menu_to_window()
        self.window.disconnect(self._handler_load)
