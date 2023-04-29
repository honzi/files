#!/bin/sh
set -eux

# No args.
# Example usage: sh install.sh

# UPDATE
sh ~/.iterami/repos/files/Scripts/Ubuntu/update.sh

# INSTALL
sudo apt-get install git

mkdir -p ~/.iterami/
mkdir -p ~/.iterami/repos/
mkdir -p ~/.iterami/storage/

cd ~/.iterami/repos/
git clone https://github.com/honzi/files.git --depth 1
cd files/Scripts
sh fetch-iterami-honzi-repos.sh ~/.iterami/repos/

sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove

# UNINSTALL
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove

# CONFIGURE
sh ~/.iterami/repos/files/Scripts/Ubuntu/configure.sh
