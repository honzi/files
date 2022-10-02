#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repos are stored.
#   $2: Commit message.
#
# Example usage: sh commit-iterami-repos.sh repos/ 'This is a commit message!'

# Check if at least 2 args were passed.
if [ $# -lt 2 ]
then
    echo 'Missing arg: path commit-message'
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

# Commit cloned iterami repos.
for repo in $iterami_repos
do
    if [ -d $repo ]
    then
        cd $repo
        if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "$2"
        fi
        cd ..

    else
        echo 'NOT YET CLONED'
    fi
done
