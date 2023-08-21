#!/bin/sh
set -eux

# No args.
# Example usage: sh install.sh

# UPDATE
sh ~/iterami/repos/files/Scripts/Ubuntu/update.sh

# INSTALL
sudo apt-get install dconf-editor
sudo apt-get install git
sudo apt-get install menulibre
sudo apt-get install nodejs
sudo apt-get install npm

mkdir -p ~/.npm-packages/
npm config set prefix "${HOME}/.npm-packages"

mkdir -p ~/iterami/
mkdir -p ~/iterami/repos/
mkdir -p ~/iterami/storage/
cd ~/iterami/repos/
git clone https://github.com/honzi/files.git --depth 1
cd files/Scripts
sh fetch-iterami-honzi-repos.sh ~/iterami/repos/

sh ~/iterami/repos/files/Scripts/Ubuntu/update.sh

# UNINSTALL
sudo apt-get remove alacarte
sudo apt-get remove bluez
sudo apt-get remove gnome-bluetooth
sudo apt-get remove indicator-bluetooth

sh ~/iterami/repos/files/Scripts/Ubuntu/update.sh

# CONFIGURE
sh ~/iterami/repos/files/Scripts/Ubuntu/configure.sh
