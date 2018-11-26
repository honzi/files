#!/bin/sh

# No arguments.

# Empty the trash.
sudo rm -rf ~/.local/share/Trash/*

# Adjust screen.
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xgamma -gamma 1

# Reset settings.
gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse
gsettings set org.gnome.nautilus.preferences show-hidden-files true

# Update and upgrade.
sudo apt-get update
sudo apt-get upgrade
