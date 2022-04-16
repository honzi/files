#!/bin/sh
set -eux

# No args.
# Example usage: sh distupgrade.sh

# Create and configure Vagrant based on the Vagrantfile.
vagrant up

# SSH into the currently running Vagrant machine.
vagrant ssh

# Update packages to latest available version
#   and handle dependencies.
sudo aptdcon -c --full-upgrade
