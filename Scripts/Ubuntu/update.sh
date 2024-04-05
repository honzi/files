#!/bin/sh
set -eux

# No args.
# Example usage: sh update.sh

# UPDATE
sudo apt-get -y update
sudo apt-get -Vy dist-upgrade
sudo apt-get -y autoclean
sudo apt-get -Vy autoremove
sudo apt-get -y clean
sudo snap refresh
