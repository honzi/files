#!/bin/sh

# No arguments.
# Example usage: sh configure.sh

# CONFIGURE
sudo modprobe -r uvcvideo
amixer set Capture nocap
amixer set Capture 0%
amixer set Mic mute
amixer set Mic 0%
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xinput disable 'ETPS/2 Elantech Touchpad'
xgamma -gamma 1

git config --global user.name 'Jan Hořava'
git config --global user.email czechinthemail@gmail.com

gsettings reset ca.desrt.dconf-editor.Settings behaviour
gsettings reset ca.desrt.dconf-editor.Settings refresh-settings-schema-source
gsettings reset ca.desrt.dconf-editor.Settings sort-case-sensitive
gsettings reset com.canonical.indicator.datetime alarm-default-sound
gsettings reset com.canonical.indicator.datetime alarm-default-volume
gsettings reset com.canonical.indicator.datetime alarm-duration-minutes
gsettings reset com.canonical.indicator.datetime alarm-haptic-feedback
gsettings reset com.canonical.indicator.datetime calendar-default-sound
gsettings reset com.canonical.indicator.datetime custom-time-format
gsettings reset com.canonical.indicator.datetime locations
gsettings reset com.canonical.indicator.datetime show-auto-detected-location
gsettings reset com.canonical.indicator.datetime show-calendar
gsettings reset com.canonical.indicator.datetime show-clock
gsettings reset com.canonical.indicator.datetime show-events
gsettings reset com.canonical.indicator.datetime show-locations
gsettings reset com.canonical.indicator.datetime snooze-duration-minutes
gsettings reset com.canonical.indicator.datetime timezone-name
gsettings reset com.canonical.indicator.messages applications
gsettings reset com.canonical.indicator.power icon-policy
gsettings reset com.canonical.indicator.session force-restart-menuitem
gsettings reset com.canonical.indicator.session show-real-name-on-panel
gsettings reset com.canonical.indicator.session suppress-logout-restart-shutdown
gsettings reset com.canonical.indicator.session suppress-restart-menuitem
gsettings reset com.canonical.indicator.session suppress-shutdown-menuitem
gsettings reset com.canonical.indicator.sound amplified-volume-decibels
gsettings reset com.canonical.indicator.sound blacklisted-media-players
gsettings reset com.canonical.indicator.sound global-mute
gsettings reset com.canonical.indicator.sound interested-media-players
gsettings reset com.canonical.indicator.sound normal-volume-decibels
gsettings reset com.canonical.indicator.sound preferred-media-players
gsettings reset com.canonical.indicator.sound visible
gsettings reset com.canonical.indicator.sound warning-volume-confirmation-ttl
gsettings reset com.canonical.indicator.sound warning-volume-decibels
gsettings reset com.canonical.indicator.sound warning-volume-enabled
gsettings reset com.ubuntu.notifications.settings.applications applications
gsettings reset com.ubuntu.notifications.settings.applications vibrate-silent-mode
gsettings reset com.ubuntu.phone default-sim-for-calls
gsettings reset com.ubuntu.phone default-sim-for-messages
gsettings reset com.ubuntu.phone mms-group-chat-enabled
gsettings reset com.ubuntu.phone sim-names
gsettings reset com.ubuntu.sound allow-amplified-volume
gsettings reset com.ubuntu.touch.network flight-mode
gsettings reset com.ubuntu.touch.network gps
gsettings reset com.ubuntu.touch.sound incoming-call-sound
gsettings reset com.ubuntu.touch.sound incoming-message-sound
gsettings reset com.ubuntu.touch.sound silent-mode
gsettings reset com.ubuntu.touch.system activity-timeout
gsettings reset com.ubuntu.touch.system auto-brightness
gsettings reset com.ubuntu.touch.system brightness
gsettings reset com.ubuntu.touch.system brightness-needs-hardware-default
gsettings reset com.ubuntu.touch.system dim-timeout
gsettings reset com.ubuntu.touch.system fingerprint-names
gsettings reset com.ubuntu.touch.system orientation-lock
gsettings reset com.ubuntu.touch.system rotation-lock
gsettings reset com.ubuntu.update-manager check-dist-upgrades
gsettings reset com.ubuntu.update-manager check-new-release-ignore
gsettings reset com.ubuntu.update-manager summary-before-name
gsettings reset com.ubuntu.update-notifier no-show-notifications
gsettings reset com.ubuntu.update-notifier regular-auto-launch-interval
gsettings reset com.ubuntu.update-notifier show-apport-crashes
gsettings reset com.ubuntu.update-notifier show-livepatch-status-icon
gsettings reset com.ubuntu.user-interface.desktop cursor-size
gsettings reset com.ubuntu.user-interface.desktop scaling-factor
gsettings reset com.ubuntu.user-interface.desktop text-scaling-factor
gsettings reset org.gnome.Cheese brightness
gsettings reset org.gnome.Cheese burst-delay
gsettings reset org.gnome.Cheese burst-repeat
gsettings reset org.gnome.Cheese camera
gsettings reset org.gnome.Cheese contrast
gsettings reset org.gnome.Cheese countdown
gsettings reset org.gnome.Cheese countdown-duration
gsettings reset org.gnome.Cheese flash
gsettings reset org.gnome.Cheese hue
gsettings reset org.gnome.Cheese photo-path
gsettings reset org.gnome.Cheese photo-x-resolution
gsettings reset org.gnome.Cheese photo-y-resolution
gsettings reset org.gnome.Cheese saturation
gsettings reset org.gnome.Cheese selected-effect
gsettings reset org.gnome.Cheese video-path
gsettings reset org.gnome.Cheese video-x-resolution
gsettings reset org.gnome.Cheese video-y-resolution
gsettings reset org.gnome.ControlCenter last-panel
gsettings reset org.gnome.GWeather default-location
gsettings reset org.gnome.GWeather pressure-unit
gsettings reset org.gnome.GWeather radar
gsettings reset org.gnome.SessionManager auto-save-session
gsettings reset org.gnome.SessionManager auto-save-session-one-shot
gsettings reset org.gnome.SessionManager logout-prompt
gsettings reset org.gnome.SessionManager show-fallback-warning
gsettings reset org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ close-tab
gsettings reset org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ copy
gsettings reset org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ paste
gsettings reset org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ new-tab
gsettings reset org.gnome.Terminal.Legacy.Settings confirm-close
gsettings reset org.gnome.Terminal.Legacy.Settings default-show-menubar
gsettings reset org.gnome.Terminal.Legacy.Settings menu-accelerator-enabled
gsettings reset org.gnome.Terminal.Legacy.Settings mnemonics-enabled
gsettings reset org.gnome.Terminal.Legacy.Settings shell-integration-enabled
gsettings reset org.gnome.Terminal.Legacy.Settings shortcuts-enabled
gsettings reset org.gnome.Terminal.Legacy.Settings tab-policy
gsettings reset org.gnome.Terminal.Legacy.Settings tab-position
gsettings reset org.gnome.Terminal.Legacy.Settings theme-variant
gsettings reset org.gnome.calendar active-view
gsettings reset org.gnome.calendar weather-settings
gsettings reset org.gnome.calendar window-maximized
gsettings reset org.gnome.calendar window-position
gsettings reset org.gnome.calendar window-size
gsettings reset org.gnome.eog.fullscreen loop
gsettings reset org.gnome.eog.fullscreen seconds
gsettings reset org.gnome.eog.fullscreen upscale
gsettings reset org.gnome.eog.ui disable-close-confirmation
gsettings reset org.gnome.eog.ui disable-trash-confirmation
gsettings reset org.gnome.eog.ui filechooser-xdg-fallback
gsettings reset org.gnome.eog.ui image-gallery
gsettings reset org.gnome.eog.ui image-gallery-position
gsettings reset org.gnome.eog.ui image-gallery-resizable
gsettings reset org.gnome.eog.ui propsdialog-netbook-mode
gsettings reset org.gnome.eog.ui scroll-buttons
gsettings reset org.gnome.eog.ui sidebar
gsettings reset org.gnome.eog.ui statusbar
gsettings reset org.gnome.eog.view autorotate
gsettings reset org.gnome.eog.view background-color
gsettings reset org.gnome.eog.view extrapolate
gsettings reset org.gnome.eog.view interpolate
gsettings reset org.gnome.eog.view scroll-wheel-zoom
gsettings reset org.gnome.eog.view trans-color
gsettings reset org.gnome.eog.view transparency
gsettings reset org.gnome.eog.view use-background-color
gsettings reset org.gnome.eog.view zoom-multiplier
gsettings reset org.gnome.gedit.plugins.externaltools font
gsettings reset org.gnome.gedit.plugins.externaltools use-system-font
gsettings reset org.gnome.gedit.plugins.filebrowser binary-patterns
gsettings reset org.gnome.gedit.plugins.filebrowser enable-remote
gsettings reset org.gnome.gedit.plugins.filebrowser filter-pattern
gsettings reset org.gnome.gedit.plugins.filebrowser open-at-first-doc
gsettings reset org.gnome.gedit.plugins.filebrowser tree-view
gsettings reset org.gnome.gedit.plugins.filebrowser.nautilus click-policy
gsettings reset org.gnome.gedit.plugins.filebrowser.nautilus confirm-trash
gsettings reset org.gnome.gedit.plugins.pythonconsole command-color
gsettings reset org.gnome.gedit.plugins.pythonconsole error-color
gsettings reset org.gnome.gedit.plugins.pythonconsole font
gsettings reset org.gnome.gedit.plugins.pythonconsole use-system-font
gsettings reset org.gnome.gedit.plugins.time custom-format
gsettings reset org.gnome.gedit.plugins.time prompt-type
gsettings reset org.gnome.gedit.plugins.time selected-format
gsettings reset org.gnome.gedit.state.history-entry replace-with-entry
gsettings reset org.gnome.gedit.state.history-entry search-for-entry
gsettings reset org.gnome.gnome-panel.general confirm-panel-removal
gsettings reset org.gnome.gnome-panel.general enable-tooltips
gsettings reset org.gnome.gnome-panel.general panel-menu
gsettings reset org.gnome.gnome-panel.general panel-menu-bar
gsettings reset org.gnome.gnome-panel.general theme-variant
gsettings reset org.gnome.gnome-panel.lockdown disable-force-quit
gsettings reset org.gnome.gnome-panel.lockdown disabled-applets
gsettings reset org.gnome.gnome-panel.lockdown locked-down
gsettings reset org.gnome.gnome-panel.run-dialog enable-autocompletion
gsettings reset org.gnome.gnome-panel.run-dialog enable-program-list
gsettings reset org.gnome.gnome-panel.run-dialog history
gsettings reset org.gnome.gnome-panel.run-dialog show-program-list
gsettings reset org.gnome.gnome-system-monitor cpu-colors
gsettings reset org.gnome.gnome-system-monitor cpu-smooth-graph
gsettings reset org.gnome.gnome-system-monitor cpu-stacked-area-chart
gsettings reset org.gnome.gnome-system-monitor current-tab
gsettings reset org.gnome.gnome-system-monitor disks-interval
gsettings reset org.gnome.gnome-system-monitor graph-update-interval
gsettings reset org.gnome.gnome-system-monitor kill-dialog
gsettings reset org.gnome.gnome-system-monitor maximized
gsettings reset org.gnome.gnome-system-monitor mem-color
gsettings reset org.gnome.gnome-system-monitor net-in-color
gsettings reset org.gnome.gnome-system-monitor net-out-color
gsettings reset org.gnome.gnome-system-monitor network-in-bits
gsettings reset org.gnome.gnome-system-monitor show-all-fs
gsettings reset org.gnome.gnome-system-monitor show-dependencies
gsettings reset org.gnome.gnome-system-monitor show-whose-processes
gsettings reset org.gnome.gnome-system-monitor smooth-refresh
gsettings reset org.gnome.gnome-system-monitor solaris-mode
gsettings reset org.gnome.gnome-system-monitor swap-color
gsettings reset org.gnome.gnome-system-monitor update-interval
gsettings reset org.gnome.gnome-system-monitor window-state
gsettings reset org.gnome.login-screen allowed-failures
gsettings reset org.gnome.login-screen banner-message-enable
gsettings reset org.gnome.login-screen banner-message-text
gsettings reset org.gnome.login-screen disable-restart-buttons
gsettings reset org.gnome.login-screen disable-user-list
gsettings reset org.gnome.login-screen enable-password-authentication
gsettings reset org.gnome.login-screen fallback-logo
gsettings reset org.gnome.login-screen logo
gsettings reset org.gnome.metacity alt-tab-thumbnails
gsettings reset org.gnome.metacity compositing-manager
gsettings reset org.gnome.metacity placement-mode
gsettings reset org.gnome.metacity reduced-resources
gsettings reset org.gnome.metacity.theme name
gsettings reset org.gnome.metacity.theme type
gsettings reset org.gnome.nautilus.compression default-compression-format
gsettings reset org.gnome.nautilus.desktop background-fade
gsettings reset org.gnome.nautilus.desktop font
gsettings reset org.gnome.nautilus.desktop home-icon-name
gsettings reset org.gnome.nautilus.desktop network-icon-name
gsettings reset org.gnome.nautilus.desktop network-icon-visible
gsettings reset org.gnome.nautilus.desktop text-ellipsis-limit
gsettings reset org.gnome.nautilus.desktop trash-icon-name
gsettings reset org.gnome.nautilus.icon-view captions
gsettings reset org.gnome.nautilus.icon-view default-zoom-level
gsettings reset org.gnome.nautilus.icon-view text-ellipsis-limit
gsettings reset org.gnome.nautilus.icon-view thumbnail-size
gsettings reset org.gnome.nautilus.list-view default-column-order
gsettings reset org.gnome.nautilus.list-view default-visible-columns
gsettings reset org.gnome.nautilus.list-view default-zoom-level
gsettings reset org.gnome.nautilus.list-view use-tree-view
gsettings reset org.gnome.nautilus.preferences always-use-location-entry
gsettings reset org.gnome.nautilus.preferences bulk-rename-tool
gsettings reset org.gnome.nautilus.preferences click-policy
gsettings reset org.gnome.nautilus.preferences confirm-trash
gsettings reset org.gnome.nautilus.preferences default-sort-in-reverse-order
gsettings reset org.gnome.nautilus.preferences default-sort-order
gsettings reset org.gnome.nautilus.preferences fts-default
gsettings reset org.gnome.nautilus.preferences install-mime-activation
gsettings reset org.gnome.nautilus.preferences mouse-back-button
gsettings reset org.gnome.nautilus.preferences mouse-forward-button
gsettings reset org.gnome.nautilus.preferences open-folder-on-dnd-hover
gsettings reset org.gnome.nautilus.preferences recursive-search
gsettings reset org.gnome.nautilus.preferences search-filter-time-type
gsettings reset org.gnome.nautilus.preferences search-view
gsettings reset org.gnome.nautilus.preferences show-delete-permanently
gsettings reset org.gnome.nautilus.preferences show-directory-item-counts
gsettings reset org.gnome.nautilus.preferences show-move-to-trash-shortcut-changed-dialog
gsettings reset org.gnome.nautilus.preferences tabs-open-position
gsettings reset org.gnome.nautilus.preferences thumbnail-limit
gsettings reset org.gnome.nautilus.preferences use-experimental-views
gsettings reset org.gnome.nautilus.window-state maximized
gsettings reset org.gnome.nautilus.window-state sidebar-width
gsettings reset org.gnome.nautilus.window-state start-with-location-bar
gsettings reset org.gnome.nautilus.window-state start-with-sidebar
gsettings reset org.gnome.nm-applet disable-connected-notifications
gsettings reset org.gnome.nm-applet disable-disconnected-notifications
gsettings reset org.gnome.nm-applet disable-vpn-notifications
gsettings reset org.gnome.nm-applet show-applet
gsettings reset org.gnome.nm-applet stamp
gsettings reset org.gnome.nm-applet suppress-wireless-networks-available
gsettings reset org.gnome.power-manager info-history-graph-points
gsettings reset org.gnome.power-manager info-history-graph-smooth
gsettings reset org.gnome.power-manager info-history-time
gsettings reset org.gnome.power-manager info-history-type
gsettings reset org.gnome.power-manager info-last-device
gsettings reset org.gnome.power-manager info-page-number
gsettings reset org.gnome.power-manager info-stats-graph-points
gsettings reset org.gnome.power-manager info-stats-graph-smooth
gsettings reset org.gnome.power-manager info-stats-type
gsettings reset org.gnome.settings-daemon.peripherals.mouse double-click
gsettings reset org.gnome.settings-daemon.peripherals.mouse drag-threshold
gsettings reset org.gnome.settings-daemon.peripherals.mouse locate-pointer
gsettings reset org.gnome.system.location enabled
gsettings reset org.gnome.system.location max-accuracy-level
gsettings reset org.gtk.Settings.ColorChooser custom-colors
gsettings reset org.gtk.Settings.ColorChooser selected-color
gsettings reset org.gtk.Settings.Debug enable-inspector-keybinding
gsettings reset org.gtk.Settings.Debug inspector-warning
gsettings reset org.gtk.Settings.EmojiChooser recent-emoji
gsettings reset org.gtk.Settings.FileChooser clock-format
gsettings reset org.gtk.Settings.FileChooser expand-folders
gsettings reset org.gtk.Settings.FileChooser last-folder-uri
gsettings reset org.gtk.Settings.FileChooser startup-mode

gsettings set ca.desrt.dconf-editor.Settings mouse-use-extra-buttons false
gsettings set ca.desrt.dconf-editor.Settings restore-view false
gsettings set ca.desrt.dconf-editor.Settings show-warning false
gsettings set ca.desrt.dconf-editor.Settings small-bookmarks-rows true
gsettings set ca.desrt.dconf-editor.Settings small-keys-list-rows true
gsettings set com.canonical.indicator.appmenu.hud store-usage-data false
gsettings set com.canonical.indicator.datetime show-date true
gsettings set com.canonical.indicator.datetime show-day true
gsettings set com.canonical.indicator.datetime show-seconds true
gsettings set com.canonical.indicator.datetime show-week-numbers true
gsettings set com.canonical.indicator.datetime time-format '24-hour'
gsettings set com.canonical.indicator.keyboard visible false
gsettings set com.canonical.indicator.power show-percentage true
gsettings set com.canonical.indicator.power show-time true
gsettings set com.canonical.indicator.session suppress-logout-menuitem true
gsettings set com.canonical.indicator.session user-show-menu false
gsettings set com.ubuntu.update-manager autoclose-install-window false
gsettings set com.ubuntu.update-manager first-run false
gsettings set com.ubuntu.update-manager show-details true
gsettings set com.ubuntu.update-manager show-versions true
gsettings set org.gnome.ControlCenter last-panel 'background'
gsettings set org.gnome.GWeather distance-unit 'km'
gsettings set org.gnome.GWeather speed-unit 'ms'
gsettings set org.gnome.GWeather temperature-unit 'centigrade'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ close-window 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ find 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ find-clear 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ find-next 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ find-previous 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ full-screen 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ move-tab-left 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ move-tab-right 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ new-window 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ next-tab 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ prev-tab 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-1 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-10 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-2 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-3 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-4 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-5 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-6 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-7 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-8 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ switch-to-tab-9 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ zoom-in 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ zoom-normal 'disabled'
gsettings set org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ zoom-out 'disabled'
gsettings set org.gnome.Terminal.Legacy.Settings new-terminal-mode 'tab'
gsettings set org.gnome.desktop.background color-shading-type 'solid'
gsettings set org.gnome.desktop.background picture-options 'none'
gsettings set org.gnome.desktop.background primary-color '#000000'
gsettings set org.gnome.desktop.background secondary-color '#000000'
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-seconds true
gsettings set org.gnome.desktop.notifications show-in-lock-screen false
gsettings set org.gnome.desktop.peripherals.mouse speed 0.61151079136690645
gsettings set org.gnome.desktop.peripherals.touchpad send-events 'disabled-on-external-mouse'
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click false
gsettings set org.gnome.desktop.privacy remember-app-usage false
gsettings set org.gnome.desktop.privacy remember-recent-files false
gsettings set org.gnome.desktop.screensaver picture-options 'none'
gsettings set org.gnome.desktop.screensaver primary-color '#000000'
gsettings set org.gnome.desktop.screensaver secondary-color '#000000'
gsettings set org.gnome.desktop.session idle-delay 600
gsettings set org.gnome.desktop.sound event-sounds false
gsettings set org.gnome.desktop.wm.keybindings activate-window-menu []
gsettings set org.gnome.desktop.wm.keybindings begin-move []
gsettings set org.gnome.desktop.wm.keybindings begin-resize []
gsettings set org.gnome.desktop.wm.keybindings close []
gsettings set org.gnome.desktop.wm.keybindings cycle-group []
gsettings set org.gnome.desktop.wm.keybindings cycle-group-backward []
gsettings set org.gnome.desktop.wm.keybindings cycle-panels []
gsettings set org.gnome.desktop.wm.keybindings cycle-panels-backward []
gsettings set org.gnome.desktop.wm.keybindings cycle-windows []
gsettings set org.gnome.desktop.wm.keybindings cycle-windows-backward []
gsettings set org.gnome.desktop.wm.keybindings maximize []
gsettings set org.gnome.desktop.wm.keybindings minimize []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-down []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-left []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-right []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-up []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-1 []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-down []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-last []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-left []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-right []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-up []
gsettings set org.gnome.desktop.wm.keybindings panel-main-menu []
gsettings set org.gnome.desktop.wm.keybindings panel-run-dialog []
gsettings set org.gnome.desktop.wm.keybindings show-desktop []
gsettings set org.gnome.desktop.wm.keybindings switch-group []
gsettings set org.gnome.desktop.wm.keybindings switch-group-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-input-source []
gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-panels []
gsettings set org.gnome.desktop.wm.keybindings switch-panels-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-1 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-last []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-up []
gsettings set org.gnome.desktop.wm.keybindings toggle-maximized []
gsettings set org.gnome.desktop.wm.keybindings unmaximize []
gsettings set org.gnome.desktop.wm.preferences num-workspaces 1
gsettings set org.gnome.eog.plugins active-plugins []
gsettings set org.gnome.gedit.plugins active-plugins []
gsettings set org.gnome.gedit.plugins.filebrowser filter-mode []
gsettings set org.gnome.login-screen enable-fingerprint-authentication false
gsettings set org.gnome.login-screen enable-smartcard-authentication false
gsettings set org.gnome.metacity edge-tiling false
gsettings set org.gnome.metacity.keybindings toggle-tiled-left []
gsettings set org.gnome.metacity.keybindings toggle-tiled-right []
gsettings set org.gnome.nautilus.desktop home-icon-visible false
gsettings set org.gnome.nautilus.desktop trash-icon-visible false
gsettings set org.gnome.nautilus.desktop volumes-visible false
gsettings set org.gnome.nautilus.preferences default-folder-viewer 'list-view'
gsettings set org.gnome.nautilus.preferences executable-text-activation 'ask'
gsettings set org.gnome.nautilus.preferences mouse-use-extra-buttons false
gsettings set org.gnome.nautilus.preferences show-create-link true
gsettings set org.gnome.nautilus.preferences show-hidden-files true
gsettings set org.gnome.nautilus.preferences show-image-thumbnails 'never'
gsettings set org.gnome.nm-applet disable-wifi-create true
gsettings set org.gtk.Settings.FileChooser show-hidden true

killall indicator-messages-service
