#!/bin/sh
set -eu

# Required args:
#   $1: Relative path to the directory in which the
#         honzi/common repository will be stored.
#
# Example usage: sh common-fork-init.sh repositories

# Check if at least 1 arg is passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

# Navigate to the target directory
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# git clone the repository from GitHub.
git clone https://github.com/honzi/common.git --depth 1

# Navigate to the root directory of the cloned repository.
cd common

# Set the origin and upstream remote urls.
git remote set-url origin https://honzi@github.com/honzi/common.git
git remote add upstream https://github.com/iterami/common.git
