#!/bin/sh

# No arguments.

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# INSTALL
sudo apt-get install chromium-browser
sudo apt-get install dconf-editor
sudo apt-get install gnome-session-flashback
sudo apt-get install libglew-dev
sudo apt-get install libgtk-3-dev
sudo apt-get install synaptic

mkdir -p ~/.iterami/
mkdir -p ~/.iterami/storage/

sudo dpkg --add-architecture i386
wget -nc -O ~/.iterami/storage/Release.key https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add ~/.iterami/storage/Release.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
sudo apt-get update
sudo apt-get install --install-recommends winehq-stable

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# UNINSTALL
sudo apt-get remove account-plugin-facebook
sudo apt-get remove account-plugin-flickr
sudo apt-get remove account-plugin-google
sudo apt-get remove activity-log-manager
sudo apt-get remove aisleriot
sudo apt-get remove aspell
sudo apt-get remove baobab
sudo apt-get remove bluez
sudo apt-get remove bluez-obexd
sudo apt-get remove branding-ubuntu
sudo apt-get remove brasero
sudo apt-get remove brltty
sudo apt-get remove cheese
sudo apt-get remove chrome-gnome-shell
sudo apt-get remove cups
sudo apt-get remove cups-browsed
sudo apt-get remove cups-common
sudo apt-get remove cups-core-drivers
sudo apt-get remove cups-daemon
sudo apt-get remove cups-filters
sudo apt-get remove cups-filters-core-drivers
sudo apt-get remove cups-pk-helper
sudo apt-get remove cups-server-common
sudo apt-get remove evince-common
sudo apt-get remove evolution
sudo apt-get remove evolution-common
sudo apt-get remove evolution-data-server-online-accounts
sudo apt-get remove example-content
sudo apt-get remove folks-common
sudo apt-get remove fonts-opensymbol
sudo apt-get remove gnome-calculator
sudo apt-get remove gnome-disk-utility
sudo apt-get remove gnome-font-viewer
sudo apt-get remove gnome-mahjongg
sudo apt-get remove gnome-mines
sudo apt-get remove gnome-orca
sudo apt-get remove gnome-session-canberra
sudo apt-get remove gnome-sudoku
sudo apt-get remove gnome-system-log
sudo apt-get remove gucharmap
sudo apt-get remove hplip-data
sudo apt-get remove hyphen-en-us
sudo apt-get remove imagemagick-common
sudo apt-get remove jayatana
sudo apt-get remove libaccount-plugin-generic-oauth
sudo apt-get remove libaccount-plugin-google
sudo apt-get remove libcheese8
sudo apt-get remove libfreerdp-common1.1.0
sudo apt-get remove libfreerdp-codec1.1
sudo apt-get remove libfreerdp-crypto1.1
sudo apt-get remove libfreerdp-locale1.1
sudo apt-get remove libfreerdp-primitives1.1
sudo apt-get remove libfreerdp-utils1.1
sudo apt-get remove libreoffice-common
sudo apt-get remove librhythmbox-core9
sudo apt-get remove mobile-broadband-provider-info
sudo apt-get remove mythes-en-us
sudo apt-get remove nautilus-sendto
sudo apt-get remove nautilus-share
sudo apt-get remove onboard
sudo apt-get remove openoffice.org-hyphenation
sudo apt-get remove openprinting-ppds
sudo apt-get remove popularity-contest
sudo apt-get remove printer-driver-brlaser
sudo apt-get remove printer-driver-c2esp
sudo apt-get remove printer-driver-foo2zjs-common
sudo apt-get remove printer-driver-min12xxw
sudo apt-get remove printer-driver-pnm2ppa
sudo apt-get remove printer-driver-postscript-hp
sudo apt-get remove printer-driver-ptouch
sudo apt-get remove printer-driver-pxljr
sudo apt-get remove printer-driver-sag-gdi
sudo apt-get remove printer-driver-splix
sudo apt-get remove remmina-common
sudo apt-get remove rhythmbox
sudo apt-get remove rhythmbox-data
sudo apt-get remove seahorse
sudo apt-get remove session-shortcuts
sudo apt-get remove shotwell
sudo apt-get remove shotwell-common
sudo apt-get remove simple-scan
sudo apt-get remove thunderbird
sudo apt-get remove totem
sudo apt-get remove libtotem0
sudo apt-get remove totem-common
sudo apt-get remove transmission-common
sudo apt-get remove ubuntu-docs
sudo apt-get remove ubuntu-minimal
sudo apt-get remove ubuntu-software
sudo apt-get remove ubuntu-sounds
sudo apt-get remove ubuntu-standard
sudo apt-get remove ubuntu-touch-sounds
sudo apt-get remove ubuntu-wallpapers-xenial
sudo apt-get remove unity-accessibility-profiles
sudo apt-get remove unity-lens-applications
sudo apt-get remove unity-lens-files
sudo apt-get remove unity-lens-music
sudo apt-get remove unity-lens-photos
sudo apt-get remove unity-scope-calculator
sudo apt-get remove unity-scope-chromiumbookmarks
sudo apt-get remove unity-scope-colourlovers
sudo apt-get remove unity-scope-devhelp
sudo apt-get remove unity-scope-firefoxbookmarks
sudo apt-get remove unity-scope-home
sudo apt-get remove unity-scope-manpages
sudo apt-get remove unity-scope-openclipart
sudo apt-get remove unity-scope-texdoc
sudo apt-get remove unity-scope-tomboy
sudo apt-get remove unity-scope-video-remote
sudo apt-get remove unity-scope-virtualbox
sudo apt-get remove unity-scope-yelp
sudo apt-get remove unity-scope-zotero
sudo apt-get remove uno-libs3
sudo apt-get remove usb-creator-common
sudo apt-get remove vino
sudo apt-get remove wamerican
sudo apt-get remove wbritish
sudo apt-get remove webbrowser-app
sudo apt-get remove whoopsie
sudo apt-get remove whoopsie-preferences
sudo apt-get remove yelp
sudo apt-get remove yelp-xsl
sudo apt-get remove libyelp0

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# CONFIGURE
sudo rm /etc/opt/chrome/policies/managed/chrome-gnome-shell.json
sudo rm /etc/chromium/policies/managed/chrome-gnome-shell.json
sudo rm ~/.steam/root/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/libstdc++.so.6

gsettings set apps.indicator-session suppress-logout-menuitem true
gsettings set apps.update-manager show-details true
gsettings set com.canonical.indicator.datetime show-date true
gsettings set com.canonical.indicator.datetime show-day true
gsettings set com.canonical.indicator.datetime show-seconds true
gsettings set com.canonical.indicator.datetime show-week-numbers true
gsettings set com.canonical.indicator.datetime time-format 24-hour
gsettings set com.canonical.indicator.power show-percentage true
gsettings set com.canonical.indicator.power show-time true
gsettings set com.canonical.unity-greeter play-ready-sound false
gsettings set org.compiz.integrated run-command-1 []
gsettings set org.compiz.integrated run-command-2 []
gsettings set org.compiz.integrated run-command-3 []
gsettings set org.compiz.integrated run-command-4 []
gsettings set org.compiz.integrated run-command-5 []
gsettings set org.compiz.integrated run-command-6 []
gsettings set org.compiz.integrated run-command-7 []
gsettings set org.compiz.integrated run-command-8 []
gsettings set org.compiz.integrated run-command-9 []
gsettings set org.compiz.integrated run-command-10 []
gsettings set org.compiz.integrated run-command-11 []
gsettings set org.compiz.integrated run-command-12 []
gsettings set org.compiz.integrated show-hud []
gsettings set org.gnome.desktop.background color-shading-type solid
gsettings set org.gnome.desktop.background picture-options none
gsettings set org.gnome.desktop.background primary-color '#000000000000'
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-seconds true
gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click false
gsettings set org.gnome.desktop.privacy remember-app-usage false
gsettings set org.gnome.desktop.privacy remember-recent-files false
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
gsettings set org.gnome.desktop.wm.keybindings lower []
gsettings set org.gnome.desktop.wm.keybindings maximize []
gsettings set org.gnome.desktop.wm.keybindings maximize-horizontally []
gsettings set org.gnome.desktop.wm.keybindings maximize-vertically []
gsettings set org.gnome.desktop.wm.keybindings minimize []
gsettings set org.gnome.desktop.wm.keybindings move-to-corner-ne []
gsettings set org.gnome.desktop.wm.keybindings move-to-corner-nw []
gsettings set org.gnome.desktop.wm.keybindings move-to-corner-se []
gsettings set org.gnome.desktop.wm.keybindings move-to-corner-sw []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-down []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-left []
gsettings set org.gnome.desktop.wm.keybindings move-to-monitor-right []
gsettings set org.gnome.desktop.wm.keybindings move-to-side-e []
gsettings set org.gnome.desktop.wm.keybindings move-to-side-n []
gsettings set org.gnome.desktop.wm.keybindings move-to-side-s []
gsettings set org.gnome.desktop.wm.keybindings move-to-side-w []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-1 []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-2 []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-down []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-last []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-left []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-right []
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-up []
gsettings set org.gnome.desktop.wm.keybindings panel-main-menu []
gsettings set org.gnome.desktop.wm.keybindings raise []
gsettings set org.gnome.desktop.wm.keybindings set-spew-mark []
gsettings set org.gnome.desktop.wm.keybindings show-desktop []
gsettings set org.gnome.desktop.wm.keybindings switch-group []
gsettings set org.gnome.desktop.wm.keybindings switch-group-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-input-source []
gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-panels []
gsettings set org.gnome.desktop.wm.keybindings switch-panels-backward []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-1 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-2 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-3 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-4 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-5 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-6 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-7 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-8 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-9 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-10 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-11 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-12 []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-last []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right []
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-up []
gsettings set org.gnome.desktop.wm.keybindings switch-windows []
gsettings set org.gnome.desktop.wm.keybindings switch-windows-backward []
gsettings set org.gnome.desktop.wm.keybindings toggle-fullscreen []
gsettings set org.gnome.desktop.wm.keybindings toggle-maximized []
gsettings set org.gnome.desktop.wm.keybindings toggle-shaded []
gsettings set org.gnome.desktop.wm.keybindings unmaximize []
gsettings set org.gnome.desktop.wm.preferences button-layout :minimize,maximize,close
gsettings set org.gnome.desktop.wm.preferences num-workspaces 1
gsettings set org.gnome.eog.plugins active-plugins []
gsettings set org.gnome.file-roller.file-selector show-hidden true
gsettings set org.gnome.gedit.plugins active-plugins []
gsettings set org.gnome.gedit.preferences.editor auto-indent true
gsettings set org.gnome.gedit.preferences.editor bracket-matching true
gsettings set org.gnome.gedit.preferences.editor display-line-numbers true
gsettings set org.gnome.gedit.preferences.editor display-overview-map true
gsettings set org.gnome.gedit.preferences.editor highlight-current-line true
gsettings set org.gnome.gedit.preferences.editor insert-spaces true
gsettings set org.gnome.gedit.preferences.editor scheme oblivion
gsettings set org.gnome.gedit.preferences.editor tabs-size 4
gsettings set org.gnome.gedit.preferences.ui statusbar-visible false
gsettings set org.gnome.login-screen enable-fingerprint-authentication false
gsettings set org.gnome.login-screen enable-smartcard-authentication false
gsettings set org.gnome.metacity edge-tiling false
gsettings set org.gnome.metacity.keybindings toggle-tiled-left []
gsettings set org.gnome.metacity.keybindings toggle-tiled-right []
gsettings set org.gnome.nautilus.preferences default-folder-viewer 'list-view'
gsettings set org.gnome.nautilus.preferences enable-interactive-search false
gsettings set org.gnome.nautilus.preferences mouse-use-extra-buttons false
gsettings set org.gnome.nautilus.preferences show-hidden-files true
gsettings set org.gnome.settings-daemon.plugins.media-keys area-screenshot ''
gsettings set org.gnome.settings-daemon.plugins.media-keys area-screenshot-clip ''
gsettings set org.gnome.settings-daemon.plugins.media-keys logout ''
gsettings set org.gnome.settings-daemon.plugins.media-keys magnifier ''
gsettings set org.gnome.settings-daemon.plugins.media-keys magnifier-zoom-in ''
gsettings set org.gnome.settings-daemon.plugins.media-keys magnifier-zoom-out ''
gsettings set org.gnome.settings-daemon.plugins.media-keys screencast ''
gsettings set org.gnome.settings-daemon.plugins.media-keys screenreader ''
gsettings set org.gnome.settings-daemon.plugins.media-keys screensaver ''
gsettings set org.gnome.settings-daemon.plugins.media-keys screenshot ''
gsettings set org.gnome.settings-daemon.plugins.media-keys screenshot-clip ''
gsettings set org.gnome.settings-daemon.plugins.media-keys terminal ''
gsettings set org.gnome.settings-daemon.plugins.media-keys video-out ''
gsettings set org.gnome.settings-daemon.plugins.media-keys window-screenshot ''
gsettings set org.gnome.settings-daemon.plugins.media-keys window-screenshot-clip ''
gsettings set org.gnome.settings-daemon.plugins.smartcard active false
gsettings set org.gtk.settings.file-chooser show-hidden true

git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com

sudo gedit /etc/init/bluetooth.override
