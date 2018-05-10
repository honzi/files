#!/bin/sh

# No arguments.

# Adjust screen.
sh ~/.iterami/repositories/Scripts/ubuntu/xrandr-scale.sh eDP1 1600 900 1920 1080 1.2 1.2
xgamma -gamma 1

# Reset settings.
gsettings set org.gnome.desktop.peripherals.touchpad send-events disabled-on-external-mouse
gsettings set org.gnome.nautilus.preferences show-hidden-files true
