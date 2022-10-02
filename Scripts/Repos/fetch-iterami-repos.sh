#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repos are/will_be stored.
#
# Example usage: sh fetch-iterami-repos.sh repos/

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

# Pull updates for cloned iterami repos
#   or clone them if they haven't been cloned yet.
for repo in $iterami_repos
do
    if [ -d $repo ]
    then
        cd $repo
        git pull

    else
        git clone https://github.com/iterami/$repo.git --depth 1
        cd $repo
    fi

    git remote set-url origin https://honzi@github.com/iterami/$repo.git

    cd ..
done
