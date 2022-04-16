#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repositories are stored.
#
# Example usage: sh check-iterami-repos.sh repositories/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing args: path'
    exit 1
fi

# Update this repository to fetch latest
#   list of iterami repositories.
git pull

# Get an array of all iterami repositories.
. ./iterami-repos-list.sh

# Navigate to the target folder
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# `git status` cloned iterami repositories.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        cd $repository
        git status
        cd ..

    else
        echo 'NOT YET CLONED'
    fi
done
