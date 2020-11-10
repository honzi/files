#!/bin/sh
set -eu

# No args.
# Example usage: sh install.sh

# UPDATE
sh ~/.iterami/repositories/files/Scripts/Ubuntu/18-04/update.sh


# INSTALL
sudo apt-get install dconf-editor
sudo apt-get install gdebi-core
sudo apt-get install git

mkdir -p ~/.iterami/
mkdir -p ~/.iterami/repositories/
mkdir -p ~/.iterami/storage/

cd ~/.iterami/repositories/
git clone https://github.com/honzi/files.git --depth 1
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
sh ~/.iterami/repositories/files/Scripts/Ubuntu/18-04/configure.sh
