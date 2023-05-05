#!/bin/sh
set -eux

# No args.
# Example usage: sh configure.sh

# CONFIGURE
sudo modprobe -r uvcvideo
amixer set Capture nocap
amixer set Capture 0%
amixer set Mic mute
amixer set Mic 0%
sh ~/iterami/repos/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xinput disable 'ETPS/2 Elantech Touchpad'
xgamma -gamma 1

git config --global user.name 'Jan Hořava'
git config --global user.email czechinthemail@gmail.com

gsettings reset-recursively ca.desrt.dconf-editor.Settings
gsettings set ca.desrt.dconf-editor.Settings mouse-use-extra-buttons false
gsettings set ca.desrt.dconf-editor.Settings restore-view false
gsettings set ca.desrt.dconf-editor.Settings show-warning false
gsettings set ca.desrt.dconf-editor.Settings small-keys-list-rows true
gsettings set ca.desrt.dconf-editor.Settings use-shortpaths true

gsettings reset-recursively com.canonical.indicator.appmenu
gsettings set com.canonical.indicator.appmenu.hud store-usage-data false

gsettings reset-recursively com.canonical.indicator.datetime
gsettings set com.canonical.indicator.datetime show-date true
gsettings set com.canonical.indicator.datetime show-day true
gsettings set com.canonical.indicator.datetime show-seconds true
gsettings set com.canonical.indicator.datetime show-week-numbers true
gsettings set com.canonical.indicator.datetime time-format '24-hour'

gsettings reset-recursively com.canonical.indicator.keyboard
gsettings set com.canonical.indicator.keyboard visible false

gsettings reset-recursively com.canonical.indicator.messages

gsettings reset-recursively com.canonical.indicator.power
gsettings set com.canonical.indicator.power show-percentage true
gsettings set com.canonical.indicator.power show-time true

gsettings set com.canonical.indicator.session suppress-logout-menuitem true
gsettings set com.canonical.indicator.session suppress-restart-menuitem true
gsettings set com.canonical.indicator.session suppress-shutdown-menuitem true
gsettings set com.canonical.indicator.session user-show-menu false

gsettings reset-recursively com.canonical.indicator.sound

gsettings reset-recursively com.ubuntu.notifications.settings.applications

gsettings reset-recursively com.ubuntu.phone

gsettings reset-recursively com.ubuntu.sound

gsettings reset-recursively com.ubuntu.touch.network

gsettings reset-recursively com.ubuntu.touch.sound

gsettings reset-recursively com.ubuntu.touch.system

gsettings reset-recursively com.ubuntu.update-manager
gsettings set com.ubuntu.update-manager autoclose-install-window false
gsettings set com.ubuntu.update-manager check-new-release-ignore 'focal'
gsettings set com.ubuntu.update-manager first-run false
gsettings set com.ubuntu.update-manager show-details true
gsettings set com.ubuntu.update-manager show-versions true

gsettings reset-recursively com.ubuntu.update-notifier

gsettings reset-recursively com.ubuntu.user-interface.desktop

gsettings reset-recursively org.gnome.calendar

gsettings reset-recursively org.gnome.Cheese

gsettings set org.gnome.ControlCenter last-panel 'background'

gsettings set org.gnome.FileRoller.FileSelector show-hidden true

gsettings reset-recursively org.gnome.desktop.a11y

gsettings reset-recursively org.gnome.desktop.a11y.applications

gsettings reset-recursively org.gnome.desktop.a11y.keyboard

gsettings reset-recursively org.gnome.desktop.a11y.magnifier

gsettings reset-recursively org.gnome.desktop.a11y.mouse

gsettings reset-recursively org.gnome.desktop.background
gsettings set org.gnome.desktop.background color-shading-type 'solid'
gsettings set org.gnome.desktop.background picture-options 'none'
gsettings set org.gnome.desktop.background primary-color '#000000'
gsettings set org.gnome.desktop.background secondary-color '#000000'

gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-seconds true
gsettings set org.gnome.desktop.interface clock-show-weekday true
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface cursor-blink-time 1000
gsettings set org.gnome.desktop.interface cursor-blink-timeout 999999
gsettings set org.gnome.desktop.interface enable-hot-corners false
gsettings set org.gnome.desktop.interface gtk-theme 'Yaru-dark'
gsettings set org.gnome.desktop.interface show-battery-percentage true

gsettings set org.gnome.desktop.lockdown disable-printing true
gsettings set org.gnome.desktop.lockdown disable-print-setup true
gsettings set org.gnome.desktop.lockdown disable-show-password true
gsettings set org.gnome.desktop.lockdown disable-user-switching true

gsettings set org.gnome.desktop.notifications show-in-lock-screen false

gsettings set org.gnome.desktop.peripherals.mouse speed 0.61151079136690645
gsettings set org.gnome.desktop.peripherals.touchpad natural-scroll false
gsettings set org.gnome.desktop.peripherals.touchpad send-events 'disabled-on-external-mouse'
gsettings set org.gnome.desktop.peripherals.touchpad tap-and-drag false
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click false

gsettings set org.gnome.desktop.privacy disable-camera true
gsettings set org.gnome.desktop.privacy disable-microphone true
gsettings set org.gnome.desktop.privacy hide-identity true
gsettings set org.gnome.desktop.privacy remember-app-usage false
gsettings set org.gnome.desktop.privacy remember-recent-files false

gsettings set org.gnome.desktop.screensaver picture-options 'none'
gsettings set org.gnome.desktop.screensaver primary-color '#000000'
gsettings set org.gnome.desktop.screensaver secondary-color '#000000'

gsettings set org.gnome.desktop.session idle-delay 3600

gsettings set org.gnome.desktop.sound allow-volume-above-100-percent false
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
gsettings set org.gnome.desktop.wm.keybindings switch-applications []
gsettings set org.gnome.desktop.wm.keybindings switch-applications-backward []
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

gsettings set org.gnome.desktop.wm.preferences action-middle-click-titlebar 'none'
gsettings set org.gnome.desktop.wm.preferences num-workspaces 1

gsettings reset-recursively org.gnome.eog
gsettings set org.gnome.eog.plugins active-plugins []

gsettings reset-recursively org.gnome.gedit
gsettings set org.gnome.gedit.plugins active-plugins []
gsettings set org.gnome.gedit.plugins.filebrowser filter-mode []

gsettings reset-recursively org.gnome.gnome-flashback.desktop.icons
gsettings set org.gnome.gnome-flashback.desktop.icons show-home false
gsettings set org.gnome.gnome-flashback.desktop.icons show-trash false

gsettings set org.gnome.gnome-flashback.keybindings area-screenshot []
gsettings set org.gnome.gnome-flashback.keybindings area-screenshot-clip []
gsettings set org.gnome.gnome-flashback.keybindings max-screencast-length 0
gsettings set org.gnome.gnome-flashback.keybindings screencast []
gsettings set org.gnome.gnome-flashback.keybindings screenshot []
gsettings set org.gnome.gnome-flashback.keybindings screenshot-clip []
gsettings set org.gnome.gnome-flashback.keybindings window-screenshot []
gsettings set org.gnome.gnome-flashback.keybindings window-screenshot-clip []

gsettings reset-recursively org.gnome.gnome-panel.general

gsettings reset-recursively org.gnome.gnome-panel.lockdown
gsettings set org.gnome.gnome-panel.lockdown locked-down true

gsettings reset-recursively org.gnome.gnome-panel.run-dialog
gsettings set org.gnome.gnome-panel.run-dialog enable-autocompletion false
gsettings set org.gnome.gnome-panel.run-dialog enable-program-list false

gsettings reset-recursively org.gnome.gnome-system-monitor

gsettings reset-recursively org.gnome.GWeather
gsettings set org.gnome.GWeather distance-unit 'km'
gsettings set org.gnome.GWeather pressure-unit 'atm'
gsettings set org.gnome.GWeather speed-unit 'ms'
gsettings set org.gnome.GWeather temperature-unit 'centigrade'

gsettings reset-recursively org.gnome.GWeather4
gsettings set org.gnome.GWeather4 distance-unit 'km'
gsettings set org.gnome.GWeather4 pressure-unit 'atm'
gsettings set org.gnome.GWeather4 speed-unit 'ms'
gsettings set org.gnome.GWeather4 temperature-unit 'centigrade'

gsettings reset-recursively org.gnome.login-screen
gsettings set org.gnome.login-screen allowed-failures 10
gsettings set org.gnome.login-screen enable-fingerprint-authentication false
gsettings set org.gnome.login-screen enable-smartcard-authentication false

gsettings reset-recursively org.gnome.metacity
gsettings set org.gnome.metacity edge-tiling false
gsettings set org.gnome.metacity.keybindings toggle-tiled-left []
gsettings set org.gnome.metacity.keybindings toggle-tiled-right []

gsettings set org.gnome.mutter dynamic-workspaces false

gsettings set org.gnome.mutter.keybindings toggle-tiled-left []
gsettings set org.gnome.mutter.keybindings toggle-tiled-right []

gsettings set org.gnome.mutter.wayland.keybindings restore-shortcuts []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-1 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-10 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-11 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-12 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-2 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-3 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-4 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-5 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-6 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-7 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-8 []
gsettings set org.gnome.mutter.wayland.keybindings switch-to-session-9 []

gsettings reset-recursively org.gnome.nautilus
gsettings set org.gnome.nautilus.list-view default-visible-columns "['name', 'size', 'date_modified']"
gsettings set org.gnome.nautilus.list-view default-zoom-level 'small'

gsettings set org.gnome.nautilus.preferences default-folder-viewer 'list-view'
gsettings set org.gnome.nautilus.preferences mouse-use-extra-buttons false
gsettings set org.gnome.nautilus.preferences show-create-link true
gsettings set org.gnome.nautilus.preferences show-hidden-files true
gsettings set org.gnome.nautilus.preferences show-image-thumbnails 'never'
gsettings set org.gnome.nautilus.preferences thumbnail-limit 10

gsettings reset-recursively org.gnome.nm-applet
gsettings set org.gnome.nm-applet disable-wifi-create true

gsettings set org.gnome.online-accounts whitelisted-providers []

gsettings reset-recursively org.gnome.power-manager

gsettings reset-recursively org.gnome.SessionManager

gsettings reset-recursively org.gnome.settings-daemon.peripherals

gsettings reset-recursively org.gnome.shell
gsettings set org.gnome.shell favorite-apps []

gsettings set org.gnome.shell.keybindings focus-active-notification []
gsettings set org.gnome.shell.keybindings open-application-menu []
gsettings set org.gnome.shell.keybindings screenshot []
gsettings set org.gnome.shell.keybindings screenshot-window []
gsettings set org.gnome.shell.keybindings shift-overview-down []
gsettings set org.gnome.shell.keybindings shift-overview-up []
gsettings set org.gnome.shell.keybindings show-screen-recording-ui []
gsettings set org.gnome.shell.keybindings show-screenshot-ui []
gsettings set org.gnome.shell.keybindings switch-to-application-1 []
gsettings set org.gnome.shell.keybindings switch-to-application-2 []
gsettings set org.gnome.shell.keybindings switch-to-application-3 []
gsettings set org.gnome.shell.keybindings switch-to-application-4 []
gsettings set org.gnome.shell.keybindings switch-to-application-5 []
gsettings set org.gnome.shell.keybindings switch-to-application-6 []
gsettings set org.gnome.shell.keybindings switch-to-application-7 []
gsettings set org.gnome.shell.keybindings switch-to-application-8 []
gsettings set org.gnome.shell.keybindings switch-to-application-9 []
gsettings set org.gnome.shell.keybindings toggle-application-view []
gsettings set org.gnome.shell.keybindings toggle-message-tray []
gsettings set org.gnome.shell.keybindings toggle-overview []

gsettings set org.gnome.shell.overrides edge-tiling false

gsettings set org.gnome.shell.ubuntu color-scheme 'prefer-dark'

gsettings reset-recursively org.gnome.system.location

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

gsettings reset-recursively org.gnome.Terminal.Legacy.Settings
gsettings set org.gnome.Terminal.Legacy.Settings new-terminal-mode 'tab'

gsettings reset-recursively org.gtk.Settings.ColorChooser

gsettings reset-recursively org.gtk.Settings.Debug

gsettings reset-recursively org.gtk.Settings.EmojiChooser

gsettings reset-recursively org.gtk.Settings.FileChooser
gsettings set org.gtk.Settings.FileChooser show-hidden true

gsettings reset-recursively org.gtk.gtk4.Settings.ColorChooser

gsettings reset-recursively org.gtk.gtk4.Settings.Debug

gsettings reset-recursively org.gtk.gtk4.Settings.EmojiChooser

gsettings reset-recursively org.gtk.gtk4.Settings.FileChooser
gsettings set org.gtk.gtk4.Settings.FileChooser show-hidden true

# Cleanup various folders.
> ~/.bash_history
> ~/.minecraft/launcher_log.txt
> ~/.python_history
sudo rm -rf ~/.cache/thumbnails/*
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/snap/warzone2100/current/.local/share/*/logs/*
sudo rm -rf ~/.steam/steam/steamapps/common/Portal\ 2/portal2/maps/workshop/*
sudo rm -rf ~/.wine/drive_c/Program\ Files\ \(x86\)/Electronic\ Arts/Crytek/Crysis\ SP\ Demo/LogBackups/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/capture/Screenshots/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/Gamelogs/*
