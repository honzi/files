#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which
#         the honzi/common repository is stored.
#
# Example usage: sh common-fork-rebase.sh repositories/common

# Check if at least 1 argument is passed.
if [ $# -lt 1 ]
then
    echo 'Missing argument: path'
    exit 2
fi

# Navigate to the repository root directory.
cd $1

# Fetch changes from the upstream master branch.
git fetch upstream

# Rebase using the upstream master branch.
git rebase upstream/master

# Force push to the origin master branch.
git push -f origin master
