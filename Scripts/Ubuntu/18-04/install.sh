#!/bin/sh

# No arguments.
# Example usage: sh install.sh

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove


# INSTALL
sudo apt-get install dconf-editor
sudo apt-get install git

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
sh configure.sh
