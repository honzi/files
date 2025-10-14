#!/bin/sh
set -eux

# Version: 22.02
# No args.
# Example usage: sh cleanup.sh

# Cleanup various folders.
> ~/.bash_history
> ~/.minecraft/launcher_log.txt
> ~/.python_history
sudo journalctl --vacuum-time=1d
sudo rm -rf ~/.cache/thumbnails/*
sudo rm -rf ~/.local/share/Trash/*
sudo rm -rf ~/.minecraft/crash-reports/*
sudo rm -rf ~/.minecraft/logs/*
sudo rm -rf ~/.npm/_logs/*
sudo rm -rf ~/snap/warzone2100/common/warzone2100/logs/*
sudo rm -rf ~/snap/warzone2100/common/warzone2100/replay/*/*
sudo rm -rf ~/snap/warzone2100/current/.local/share/*/logs/*
sudo rm -rf ~/.steam/steam/steamapps/common/Portal\ 2/portal2/maps/workshop/*
