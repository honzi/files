#!/bin/sh
set -eux

# No args.
# Example usage: sh issue-5199.sh

# Remove synced_folders folder.
rm .vagrant/machines/default/virtualbox/synced_folders

# Reload and provision Vagrant.
vagrant reload --provision
