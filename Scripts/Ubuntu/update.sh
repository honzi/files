#!/bin/sh
set -eux

# No args.
# Example usage: sh update.sh

# UPDATE
sudo apt-get -y update
sudo apt-get -y dist-upgrade
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y autoremove
sudo snap refresh
