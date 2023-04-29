#!/bin/sh
set -eux

# No args.
# Example usage: sh configure.sh

# CONFIGURE
git config --global user.name 'Jan Hořava'
git config --global user.email czechinthemail@gmail.com

# Cleanup various folders.
