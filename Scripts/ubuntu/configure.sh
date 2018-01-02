#!/bin/sh

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get upgrade
sudo apt autoremove


# INSTALL
sudo apt-get install chromium-browser
sudo apt-get install dconf-editor
sudo apt-get install gnome-session-fallback
sudo apt-get install libgtk-3-dev
sudo apt-get install synaptic

sudo apt-get update
sudo apt-get upgrade
sudo apt autoremove


# UNINSTALL
sudo apt-get update
sudo apt-get upgrade
sudo apt autoremove


# CONFIGURE
sudo rm /etc/opt/chrome/policies/managed/chrome-gnome-shell.json
sudo rm /etc/chromium/policies/managed/chrome-gnome-shell.json
sudo rm /home/honzi/.steam/root/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/libstdc++.so.6

gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse

git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com

sudo gedit /etc/init/bluetooth.override
