#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the directory in which
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
echo 'pulling https://github.com/honzi/files'
git pull
echo

# Get an array of all iterami repositories.
. ./iterami-repos-list.sh

# Navigate to the target directory
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# Commit cloned iterami repositories.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        echo 'adding/committing https://github.com/iterami/'$repository
        cd $repository
        if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "$2"
        else
            echo 'Nothing to commit. Skipping.'
        fi
        cd ..

    else
        echo 'https://github.com/iterami/'$repository' NOT YET CLONED'
    fi

    echo
done
