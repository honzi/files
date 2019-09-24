#!/bin/sh

# No arguments.
# Example usage: sh configure.sh

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# INSTALL
mkdir -p ~/.iterami/
mkdir -p ~/.iterami/repositories/
mkdir -p ~/.iterami/storage/

cd ~/.iterami/repositories/
git clone --depth 1 https://github.com/honzi/files.git
cd files/Scripts
sh fetch-iterami-honzi-repos.sh ~/.iterami/repositories/

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# UNINSTALL
sudo apt-get remove bluez
sudo apt-get remove gnome-bluetooth
sudo apt-get remove indicator-bluetooth
sudo apt-get remove pulseaudio-module-bluetooth

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# CONFIGURE
git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com
gsettings set org.gnome.desktop.background color-shading-type "solid"
gsettings set org.gnome.desktop.background picture-options "none"
gsettings set org.gnome.desktop.background primary-color "#000000"
gsettings set org.gnome.desktop.background secondary-color "#000000"
