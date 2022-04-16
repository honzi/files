#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the honzi repositories are/will_be stored.
#
# Example usage: sh fetch-honzi-repos.sh repositories/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

# Update this repository to fetch latest
#   list of honzi repositories.
git pull

# Get an array of all honzi repositories.
. ./honzi-repos-list.sh

# Navigate to the target folder
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# Pull updates for cloned honzi repositories
#   or clone them if they haven't been cloned yet.
for repository in $honzi_repositories
do
    if [ -d $repository ]
    then
        cd $repository
        git pull

    else
        git clone https://github.com/honzi/$repository.git --depth 1
        cd $repository
    fi

    git remote set-url origin https://honzi@github.com/honzi/$repository.git

    cd ..
done
