#!/bin/sh
set -eux

# No args.
# Example usage: sh cleanup.sh

# Cleanup various folders.
> ~/.bash_history
> ~/.minecraft/launcher_log.txt
> ~/.python_history
sudo rm -rf ~/.cache/thumbnails/*
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/.npm/_logs/*
sudo rm -rf ~/snap/warzone2100/current/.local/share/*/logs/*
sudo rm -rf ~/.steam/steam/steamapps/common/Portal\ 2/portal2/maps/workshop/*
sudo rm -rf ~/.wine/drive_c/Program\ Files\ \(x86\)/Electronic\ Arts/Crytek/Crysis\ SP\ Demo/LogBackups/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/capture/*/*
sudo rm -rf ~/.wine/drive_c/users/honzi/My\ Documents/EVE/logs/*/*
