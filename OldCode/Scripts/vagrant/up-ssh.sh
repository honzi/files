#!/bin/sh
set -eux

# No args.
# Example usage: sh up-ssh.sh

# Create and configure Vagrant based on the Vagrantfile.
vagrant up

# SSH into the currently running Vagrant machine.
vagrant ssh
