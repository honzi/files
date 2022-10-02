#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repos are stored.
#
# Example usage: sh check-iterami-repos.sh repos/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing args: path'
    exit 1
fi

# Update this repo to fetch latest
#   list of iterami repos.
git pull

# Get an array of all iterami repos.
. ./iterami-repos-list.sh

# Navigate to the target folder
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# `git status` cloned iterami repos.
for repo in $iterami_repos
do
    if [ -d $repo ]
    then
        cd $repo
        git status
        cd ..

    else
        echo 'NOT YET CLONED'
    fi
done
