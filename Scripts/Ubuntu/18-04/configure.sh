#!/bin/sh

# No arguments.
# Example usage: sh configure.sh

# CONFIGURE
git config --global user.name "Jan Hořava"
git config --global user.email czechinthemail@gmail.com
gsettings set org.gnome.desktop.background color-shading-type "solid"
gsettings set org.gnome.desktop.background picture-options "none"
gsettings set org.gnome.desktop.background primary-color "#000000"
gsettings set org.gnome.desktop.background secondary-color "#000000"
