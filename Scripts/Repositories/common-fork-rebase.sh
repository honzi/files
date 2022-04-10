#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the directory in which
#         the honzi/common repository is stored.
#
# Example usage: sh common-fork-rebase.sh repositories/common

# Check if at least 1 arg is passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

# Navigate to the repository root directory.
cd $1

# Fetch changes from the upstream gh-pages branch.
git fetch upstream

# Rebase using the upstream gh-pages branch.
git rebase upstream/gh-pages

# Force push to the origin gh-pages branch.
git push -f origin gh-pages
