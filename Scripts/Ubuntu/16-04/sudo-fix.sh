#!/bin/sh

# No args.
# Example usage: sh sudo-fix.sh

# Adjust screen.
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xgamma -gamma 1

# Reset settings.
gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse
gsettings set org.gnome.nautilus.preferences show-hidden-files true

# Cleanup various directories.
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/Gamelogs/*

# Update everything.
sudo aptdcon -c --full-upgrade
