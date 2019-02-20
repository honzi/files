#!/bin/sh

# No arguments.
# Example usage: sh sudo-fix.sh

# Adjust screen.
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xgamma -gamma 1

# Reset settings.
gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse
gsettings set org.gnome.nautilus.preferences show-hidden-files true

# Empty the trash.
sudo rm -rf ~/.local/share/Trash/*

# Delete EVE logs.
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/Gamelogs/*

# Update everything.
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get autoremove
