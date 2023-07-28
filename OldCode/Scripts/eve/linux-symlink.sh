#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the evelauncher folder.
#
# Example usage: sh linux-symlink.sh evelauncher/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing args: path'
    exit 1
fi

# Install libssl1.0.0.
sudo aptdcon -c -i libssl1.0.0

# Navigate to the launcher folder.
cd $1

# Create symlinks if they don't already exist.
if [ ! -e libssl.so.1.0.0 ]; then
    ln -s /lib/x86_64-linux-gnu/libssl.so.1.0.0 libssl.so
fi
if [ ! -e libcrypto.so.1.0.0 ]; then
    ln -s /lib/x86_64-linux-gnu/libcrypto.so.1.0.0 libcrypto.so
fi
