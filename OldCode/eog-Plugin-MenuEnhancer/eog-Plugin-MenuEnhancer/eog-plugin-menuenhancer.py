#!/usr/bin/env python3

from gi.repository import Eog, GObject, Gtk

class eog_plugin_menuenhancer_window(GObject.Object, Eog.WindowActivatable):
    __gtype_name__ = 'eog_plugin_menuenhancer_window'
    window = GObject.property(type = Eog.Window)

    def __init__(self):
        GObject.Object.__init__(self)

    def action_menuitem_file_randomize(self, action):
        _thumbview = self.window.get_thumb_view()
        _thumbview.select_single(5) # EOG_THUMB_VIEW_SELECT_RANDOM

    def attach_menu_to_window(self):
        manager = self.window.get_ui_manager()
        self._groups = Gtk.ActionGroup('eog_plugin_menuenhancer-actions')
        self._groups.add_actions([
          ('eog_Plugin_MenuEnhancer_Randomize', Gtk.STOCK_ADD, _('Random Image'),
            'm', _('Go to a random image of the gallery'),
            self.action_menuitem_file_randomize),
        ])
        manager.insert_action_group(self._groups, -1)
        menuxml = """
<menubar name="MainMenu">
  <menu action="Go">
    <menuitem action="eog_Plugin_MenuEnhancer_Randomize"/>
  </menu>
</menubar>
"""
        self._ui = manager.add_ui_from_string(menuxml)
    
    def do_activate(self):
        self.attach_menu_to_window()
        self._handler_load = self.window.connect('show', self.show)

    def do_deactivate(self):
        manager = self.window.get_ui_manager()
        manager.remove_action_group(self._groups)
        manager.remove_ui(self._ui)
        manager.ensure_update()

    def do_update_state(self):
        pass

    def show(self, window, data = None):
        self.attach_menu_to_window()
        self.window.disconnect(self._handler_load)
