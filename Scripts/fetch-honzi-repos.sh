#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are/will_be stored.
#
# Example: sh fetch-honzi-repos.sh honzi/

# Check if at least 1 argument was passed.
if [ $# -lt 1 ]
then
    echo 'Missing argument: path'
    exit 2
fi

# Update this repository to fetch
#   latest list of honzi repositories.
echo 'pulling https://github.com/honzi/files'
git pull
echo

# Execute honzi-repos-fetch.sh, which has
#   the updated list of honzi repositories.
sh honzi-repos-fetch.sh $1
