#!/bin/sh
set -eu

# Required args:
#   $1: Relative path to the directory in which
#         the iterami repositories are/will_be stored.
#
# Example usage: sh fetch-iterami-repos.sh repositories/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

# Update this repository to fetch latest
#   list of iterami repositories.
echo 'pulling https://github.com/honzi/files'
git pull
echo

# Get an array of all iterami repositories.
. ./iterami-repos-list.sh

# Navigate to the target directory
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# Pull updates for cloned iterami repositories
#   or clone them if they haven't been cloned yet.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        cd $repository
        git pull

    else
        git clone --depth 1 https://github.com/iterami/$repository.git
        cd $repository
    fi

    git remote set-url origin https://honzi@github.com/iterami/$repository.git
    echo 'fetched and set origin url for https://github.com/iterami/'$repository

    cd ..

    echo
done
