#!/bin/sh

# No arguments.
# Example usage: sh sudo-fix.sh

# Stop/reset various settings and processes.
sudo modprobe -r uvcvideo
amixer set Mic mute
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xinput disable 'ETPS/2 Elantech Touchpad'
xgamma -gamma 1
killall indicator-messages-service

# Cleanup various directories.
> ~/.bash_history
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/snap/warzone2100/current/.local/share/warzone2100-3.3.0/logs/*
sudo rm -rf ~/.steam/steam/steamapps/common/Portal\ 2/portal2/maps/workshop/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/capture/Screenshots/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/Gamelogs/*

# Update everything.
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get autoremove

sudo winetricks --self-update
