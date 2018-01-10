#!/bin/sh

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# INSTALL
sudo apt-get install chromium-browser
sudo apt-get install dconf-editor
sudo apt-get install gnome-session-fallback
sudo apt-get install libglew-dev
sudo apt-get install libgtk-3-dev
sudo apt-get install synaptic

sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add Release.key
sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
sudo apt-get update
sudo apt-get install --install-recommends winehq-stable

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# UNINSTALL
sudo apt-get remove account-plugin-facebook
sudo apt-get remove account-plugin-flikr
sudo apt-get remove account-plugin-google
sudo apt-get remove activity-log-manager
sudo apt-get remove aisleriot
sudo apt-get remove aspell
sudo apt-get remove baobab
sudo apt-get remove brasero
sudo apt-get remove brltty
sudo apt-get remove cheese
sudo apt-get remove chrome-gnome-shell
sudo apt-get remove evince-common
sudo apt-get remove evolution
sudo apt-get remove evolution-common
sudo apt-get remove evolution-data-server-online-accounts
sudo apt-get remove example-content
sudo apt-get remove folks-common
sudo apt-get remove fonts-opensymbol
sudo apt-get remove gnome-mahjongg
sudo apt-get remove gnome-mines
sudo apt-get remove gnome-orca
sudo apt-get remove gnome-sudoku
sudo apt-get remove gucharmap
sudo apt-get remove hplip-data
sudo apt-get remove hyphen-en-us
sudo apt-get remove jayatana
sudo apt-get remove libaccount-plugin-generic-oauth
sudo apt-get remove libaccount-plugin-google
sudo apt-get remove libfreerdp-common1.1.0
sudo apt-get remove libfreerdp-codec1.1
sudo apt-get remove libfreerdp-crypto1.1
sudo apt-get remove libfreerdp-locale1.1
sudo apt-get remove libfreerdp-primitives1.1
sudo apt-get remove libfreerdp-utils1.1
sudo apt-get remove libreoffice-core
sudo apt-get remove libreoffice-common
sudo apt-get remove mobile-broadband-provider-info
sudo apt-get remove mythes-en-us
sudo apt-get remove onboard
sudo apt-get remove openoffice.org-hyphenation
sudo apt-get remove printer-driver-brlaser
sudo apt-get remove printer-driver-c2esp
sudo apt-get remove printer-driver-foo2zjs-common
sudo apt-get remove printer-driver-gutenprint
sudo apt-get remove printer-driver-min12xxw
sudo apt-get remove printer-driver-postscript-hp
sudo apt-get remove printer-driver-ptouch
sudo apt-get remove printer-driver-pxljr
sudo apt-get remove printer-driver-sag-gdi
sudo apt-get remove printer-driver-splix
sudo apt-get remove remmina-common
sudo apt-get remove rhythmbox
sudo apt-get remove rhythmbox-data
sudo apt-get remove shotwell
sudo apt-get remove shotwell-common
sudo apt-get remove simple-scan
sudo apt-get remove thunderbird
sudo apt-get remove totem
sudo apt-get remove libtotem0
sudo apt-get remove totem-common
sudo apt-get remove transmission-common
sudo apt-get remove unity-scope-firefoxbookmarks
sudo apt-get remove uno-libs3
sudo apt-get remove vino
sudo apt-get remove whoopsie

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# CONFIGURE
sudo rm /etc/opt/chrome/policies/managed/chrome-gnome-shell.json
sudo rm /etc/chromium/policies/managed/chrome-gnome-shell.json
sudo rm ~/.steam/root/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/libstdc++.so.6

gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse

git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com

sudo gedit /etc/init/bluetooth.override
