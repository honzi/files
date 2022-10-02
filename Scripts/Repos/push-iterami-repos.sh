#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repos are stored.
#
# Example usage: sh push-iterami-repos.sh repos/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
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

# Push cloned iterami repos.
for repo in $iterami_repos
do
    if [ -d $repo ]
    then
        cd $repo
        git push origin HEAD
        cd ..

    else
        echo 'NOT YET CLONED'
    fi
done
