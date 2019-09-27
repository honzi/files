#!/bin/sh

# No arguments.
# Example usage: sh configure.sh

# CONFIGURE
git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com

gsettings reset apps.indicator-session force-restart-menuitem
gsettings reset apps.indicator-session show-real-name-on-panel
gsettings reset apps.indicator-session suppress-logout-restart-shutdown
gsettings reset apps.indicator-session suppress-restart-menuitem
gsettings reset apps.indicator-session suppress-shutdown-menuitem
gsettings reset apps.update-manager check-dist-upgrades
gsettings reset apps.update-manager check-new-release-ignore
gsettings reset apps.update-manager summary-before-name
gsettings reset ca.desrt.dconf-editor behavior
gsettings reset ca.desrt.dconf-editor refresh-settings-schema-source
gsettings reset ca.desrt.dconf-editor sort-case-sensitive
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
gsettings reset com.ubuntu.NotificationSettings applications
gsettings reset com.ubuntu.NotificationSettings vibrate-silent-mode
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
gsettings reset com.ubuntu.update-notifier no-show-notifications
gsettings reset com.ubuntu.update-notifier regular-auto-launch-interval
gsettings reset com.ubuntu.update-notifier show-apport-crashes
gsettings reset com.ubuntu.update-notifier show-livepatch-status-icon
gsettings reset com.ubuntu.user-interface.desktop cursor-size
gsettings reset com.ubuntu.user-interface.desktop scaling-factor
gsettings reset com.ubuntu.user-interface.desktop text-scaling-factor
gsettings reset org.gnome.calendar active-view
gsettings reset org.gnome.calendar weather-settings
gsettings reset org.gnome.calendar window-maximized
gsettings reset org.gnome.calendar window-position
gsettings reset org.gnome.calendar window-size
gsettings reset org.gnome.cheese brightness
gsettings reset org.gnome.cheese burst-delay
gsettings reset org.gnome.cheese burst-repeat
gsettings reset org.gnome.cheese camera
gsettings reset org.gnome.cheese contrast
gsettings reset org.gnome.cheese countdown
gsettings reset org.gnome.cheese countdown-duration
gsettings reset org.gnome.cheese flash
gsettings reset org.gnome.cheese hue
gsettings reset org.gnome.cheese photo-path
gsettings reset org.gnome.cheese photo-x-resolution
gsettings reset org.gnome.cheese photo-y-resolution
gsettings reset org.gnome.cheese saturation
gsettings reset org.gnome.cheese selected-effect
gsettings reset org.gnome.cheese video-path
gsettings reset org.gnome.cheese video-x-resolution
gsettings reset org.gnome.cheese video-y-resolution
gsettings reset org.gnome.control-center last-panel
gsettings reset org.gnome.eog.fullscreen loop
gsettings reset org.gnome.eog.fullscreen seconds
gsettings reset org.gnome.eog.fullscreen upscale
gsettings reset org.gnome.eog.ui disable-close-confirmation
gsettings reset org.gnome.eog.ui dsiable-trash-confirmation
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
gsettings reset org.gnome.gedit.externaltools font
gsettings reset org.gnome.gedit.externaltools use-system-font
gsettings reset org.gnome.gedit.filebrowser binary-patterns
gsettings reset org.gnome.gedit.filebrowser enable-remote
gsettings reset org.gnome.gedit.filebrowser filter-pattern
gsettings reset org.gnome.gedit.filebrowser open-at-first-doc
gsettings reset org.gnome.gedit.filebrowser tree-view
gsettings reset org.gnome.gedit.filebrowser.nautilus click-policy
gsettings reset org.gnome.gedit.filebrowser.nautilus confirm-trash
gsettings reset org.gnome.gedit.pythonconsole command-color
gsettings reset org.gnome.gedit.pythonconsole error-color
gsettings reset org.gnome.gedit.pythonconsole font
gsettings reset org.gnome.gedit.pythonconsole use-system-font
gsettings reset org.gnome.gedit.time custom-format
gsettings reset org.gnome.gedit.time prompt-type
gsettings reset org.gnome.gedit.time selected-format
gsettings reset org.gnome.gnome-panel.general confirm-panel-removal
gsettings reset org.gnome.gnome-panel.general enable-tooltips
gsettings reset org.gnome.gnome-panel.general panel-menu
gsettings reset org.gnome.gnome-panel.general panel-menu-bar
gsettings reset org.gnome.gnome-panel.general theme-variant
gsettings reset org.gnome.gnome-panel.lockdown disabled-applets
gsettings reset org.gnome.gnome-panel.lockdown disable-force-quit
gsettings reset org.gnome.gnome-panel.lockdown locked-down
gsettings reset org.gnome.gnome-panel.run-dialog enable-autocompletion
gsettings reset org.gnome.gnome-panel.run-dialog enable-program-list
gsettings reset org.gnome.gnome-panel.run-dialog history
gsettings reset org.gnome.gnome-panel.run-dialog show-program-list
gsettings reset org.gnome.gnome-session auto-save-session
gsettings reset org.gnome.gnome-session auto-save-session-one-shot
gsettings reset org.gnome.gnome-session logout-prompt
gsettings reset org.gnome.gnome-session show-fallback-warning
gsettings reset org.gnome.gnome-system-monitor cpu-colors
gsettings reset org.gnome.gnome-system-monitor cpu-smooth-graph
gsettings reset org.gnome.gnome-system-monitor cpu-stacked-area-chart
gsettings reset org.gnome.gnome-system-monitor current-tab
gsettings reset org.gnome.gnome-system-monitor disks-interval
gsettings reset org.gnome.gnome-system-monitor graph-update-interval
gsettings reset org.gnome.gnome-system-monitor kill-dialog
gsettings reset org.gnome.gnome-system-monitor maxmized
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
gsettings reset org.gnome.GWeather default-location
gsettings reset org.gnome.GWeather pressure-unit
gsettings reset org.gnome.GWeather radar
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
gsettings reset org.gnome.nautilius.compression default-compression-format
gsettings reset org.gnome.nautilius.desktop background-fade
gsettings reset org.gnome.nautilius.desktop font
gsettings reset org.gnome.nautilius.desktop home-icon-name
gsettings reset org.gnome.nautilius.desktop network-icon-name
gsettings reset org.gnome.nautilius.desktop network-icon-visible
gsettings reset org.gnome.nautilius.desktop text-ellipsis-limit
gsettings reset org.gnome.nautilius.desktop trash-icon-name
gsettings reset org.gnome.nautilius.icon-view captions
gsettings reset org.gnome.nautilius.icon-view default-zoom-level
gsettings reset org.gnome.nautilius.icon-view text-ellipsis-limit
gsettings reset org.gnome.nautilius.icon-view thumbnail-size
gsettings reset org.gnome.nautilius.list-view default-column-order
gsettings reset org.gnome.nautilius.list-view default-visible-columns
gsettings reset org.gnome.nautilius.list-view default-zoom-level
gsettings reset org.gnome.nautilius.list-view use-tree-view
gsettings reset org.gnome.nautilius.preferences always-use-location-entry
gsettings reset org.gnome.nautilius.preferences bulk-rename-tool
gsettings reset org.gnome.nautilius.preferences click-policy
gsettings reset org.gnome.nautilius.preferences confirm-trash
gsettings reset org.gnome.nautilius.preferences default-sort-in-reverse-order
gsettings reset org.gnome.nautilius.preferences default-sort-order
gsettings reset org.gnome.nautilius.preferences fts-default
gsettings reset org.gnome.nautilius.preferences install-mime-activation
gsettings reset org.gnome.nautilius.preferences mouse-back-button
gsettings reset org.gnome.nautilius.preferences mouse-forward-button
gsettings reset org.gnome.nautilius.preferences open-folder-on-dnd-hover
gsettings reset org.gnome.nautilius.preferences recursive-search
gsettings reset org.gnome.nautilius.preferences search-filter-time-type
gsettings reset org.gnome.nautilius.preferences search-view
gsettings reset org.gnome.nautilius.preferences show-delete-permanently
gsettings reset org.gnome.nautilius.preferences show-directory-item-counts
gsettings reset org.gnome.nautilius.preferences show-image-thumnails
gsettings reset org.gnome.nautilius.preferences show-move-to-trash-shortcut-changed-dialog
gsettings reset org.gnome.nautilius.preferences tabs-open-position
gsettings reset org.gnome.nautilius.preferences thumnail-limit
gsettings reset org.gnome.nautilius.preferences use-experiemental-views
gsettings reset org.gnome.nautilius.window-state maximized
gsettings reset org.gnome.nautilius.window-state sidebar-width
gsettings reset org.gnome.nautilius.window-state start-with-location-bar
gsettings reset org.gnome.nautilius.window-state start-with-sidebar
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
gsettings reset org.gtk.settings.color-chooser custom-colors
gsettings reset org.gtk.settings.color-chooser selected-color
gsettings reset org.gtk.settings.debug enable-inspector-keybinding
gsettings reset org.gtk.settings.debug inspector-warning
gsettings reset org.gtk.settings.emoji-chooser recent-emoji
gsettings reset org.gtk.settings.file-chooser clock-format
gsettings reset org.gtk.settings.file-chooser expand-folders
gsettings reset org.gtk.settings.file-chooser last-folder-uri
gsettings reset org.gtk.settings.file-chooser startup-mode

gsettings set apps.indicator-session suppress-logout-menuitem true
gsettings set apps.indicator-session user-show-menu false
gsettings set apps.update-manager autoclose-install-window false
gsettings set apps.update-manager first-run false
gsettings set apps.update-manager show-details true
gsettings set apps.update-manager show-versions true
gsettings set ca.desrt.dconf-editor mouse-use-extra-buttons false
gsettings set ca.desrt.dconf-editor restore-view false
gsettings set ca.desrt.dconf-editor show-warning false
gsettings set ca.desrt.dconf-editor small-bookmarks-rows true
gsettings set ca.desrt.dconf-editor small-keys-list-rows true
gsettings set com.canonical.indicator.appmenu.hud store-usage-data false
gsettings set com.canonical.indicator.datetime show-date true
gsettings set com.canonical.indicator.datetime show-day true
gsettings set com.canonical.indicator.datetime show-seconds true
gsettings set com.canonical.indicator.datetime show-week-numbers true
gsettings set com.canonical.indicator.datetime time-format "24-hour"
gsettings set com.canonical.indicator.keyboard visible false
gsettings set com.canonical.indicator.power show-percentage true
gsettings set com.canonical.indicator.power show-time true
gsettings set org.gnome.desktop.background color-shading-type "solid"
gsettings set org.gnome.desktop.background picture-options "none"
gsettings set org.gnome.desktop.background primary-color "#000000"
gsettings set org.gnome.desktop.background secondary-color "#000000"
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-seconds true
gsettings set org.gnome.desktop.notifications show-in-lock-screen false
gsettings set org.gnome.desktop.peripherals.mouse speed 0.61151079136690645
gsettings set org.gnome.desktop.peripherals.touchpad send-events "disabled-on-external-mouse"
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click false
gsettings set org.gnome.desktop.privacy remember-app-usage false
gsettings set org.gnome.desktop.privacy remember-recent-files false
gsettings set org.gnome.desktop.screensaver picture-options "none"
gsettings set org.gnome.desktop.screensaver primary-color "#000000"
gsettings set org.gnome.desktop.screensaver secondary-color "#000000"
gsettings set org.gnome.desktop.session idle-delay 1800
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
gsettings set org.gnome.gedit.plugins active-plugins []
gsettings set org.gnome.gedit.plugins.filebrowser filter-mode []
gsettings set org.gnome.eog.plugins active-plugins []
gsettings set org.gnome.GWeather distance-unit "km"
gsettings set org.gnome.GWeather speed-unit "ms"
gsettings set org.gnome.GWeather temperature-unit "centigrade"
gsettings set org.gnome.login-screen enable-fingerprint-authentication false
gsettings set org.gnome.login-screen enable-smartcard-authentication false
gsettings set org.gnome.metacity edge-tiling false
gsettings set org.gnome.metacity.keybindings toggle-tiled-left []
gsettings set org.gnome.metacity.keybindings toggle-tiled-right []
gsettings set org.gnome.nautilus.desktop home-icon-visible false
gsettings set org.gnome.nautilus.desktop trash-icon-visible false
gsettings set org.gnome.nautilus.desktop volumes-visible false
gsettings set org.gnome.nautilus.preferences default-folder-viewer "list-view"
gsettings set org.gnome.nautilus.preferences executable-text-activation "ask"
gsettings set org.gnome.nautilus.preferences mouse-use-extra-buttons false
gsettings set org.gnome.nautilus.preferences show-create-link true
gsettings set org.gnome.nautilus.preferences show-hidden-files true
gsettings set org.gnome.nm-applet disable-wifi-create true
gsettings set org.gtk.settings.file-chooser show-hidden true
