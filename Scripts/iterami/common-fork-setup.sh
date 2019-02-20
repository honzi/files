#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi/common repository will be stored.
#
# Example usage: sh common-fork-setup.sh repositories

# Check if at least 1 argument is passed.
if [ $# -lt 1 ]
then
    echo 'Missing argument: path'
    exit 2
fi

# Navigate to the target directory
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# git clone the repository from GitHub.
git clone http://github.com/honzi/common.git

# Navigate to the root directory of the cloned repository.
cd common

# Set the origin remote url.
git remote set-url origin https://honzi@github.com/honzi/common.git

# Force gh-pages to update.
git push -f origin HEAD^:gh-pages
git push origin gh-pages
