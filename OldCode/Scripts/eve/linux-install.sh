#!/bin/sh
set -eux

# No args.
# Example usage: sh linux-install.sh

# Download launcher.
wget https://binaries.eveonline.com/evelauncher-1104891.tar.gz

# Extract launcher files.
tar -xvf evelauncher-1104891.tar.gz

# cd to launcher folder.
cd evelauncher

# Make evelauncher.sh executable.
chmod u+x evelauncher.sh
