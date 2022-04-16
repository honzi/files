#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repositories are stored.
#   $2: Commit message.
#
# Example usage: sh commit-iterami-repos.sh repositories/ 'This is a commit message!'

# Check if at least 2 args were passed.
if [ $# -lt 2 ]
then
    echo 'Missing arg: path commit-message'
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

# Commit cloned iterami repositories.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        cd $repository
        if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "$2"
        fi
        cd ..

    else
        echo 'NOT YET CLONED'
    fi
done
