#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are stored.
#   $2: Commit message.
#
# Example: sh commit-honzi-repos.sh honzi/ 'This is a commit message!'

# Check if at least 2 arguments were passed.
if [ $# -lt 2 ]
then
    echo 'Missing argument: path commit-message'
    exit 2
fi

# Update this repository to fetch
#   latest list of honzi repositories.
echo 'pulling https://github.com/honzi/files'
git pull
echo

# Execute honzi-repos-commit.sh, which has
#   the updated list of honzi repositories.
sh honzi-repos-commit.sh $1 "$2"
