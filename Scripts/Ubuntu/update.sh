#!/bin/sh
set -eu

# No args.
# Example usage: sh update.sh

# UPDATE
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get update
sudo apt-get upgrade
sudo apt-get autoremove
