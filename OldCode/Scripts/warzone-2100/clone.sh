#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         Warzone 2100 will be cloned.
#
# Example usage: sh clone.sh warzone2100/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

# Clone Warzone 2100 from GitHub.
git clone https://github.com/Warzone2100/warzone2100.git --depth 1

# Navigate to the newly created warzone2100 folder.
cd warzone2100

# Update submodules.
git submodule update --init --recursive
