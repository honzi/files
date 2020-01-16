#!/bin/sh

# Required args:
#   $1: Relative path to the directory in which
#         the iterami repositories are stored.
#
# Example usage: sh push-iterami-repos.sh repositories/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 2
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

# Push cloned iterami repositories.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        echo 'pushing https://github.com/iterami/'$repository
        cd $repository
        git push origin HEAD
        cd ..

    else
        echo 'https://github.com/iterami/'$repository' NOT YET CLONED'
    fi

    echo
done
