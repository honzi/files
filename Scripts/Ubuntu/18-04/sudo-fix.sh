#!/bin/sh

# No arguments.
# Example usage: sh sudo-fix.sh

# Reset various settings.
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xgamma -gamma 1
xinput disable 'ETPS/2 Elantech Touchpad'

# Cleanup various directories.
> ~/.bash_history
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/snap/warzone2100/current/.local/share/warzone2100-3.3.0/logs/*
sudo rm -rf ~/.steam/steam/steamapps/common/Portal\ 2/portal2/maps/workshop/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/capture/Screenshots/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/Gamelogs/*

# Stop various processes.
killall indicator-messages-service

# Update everything.
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get autoremove

sudo winetricks --self-update
