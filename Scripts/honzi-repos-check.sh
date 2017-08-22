#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are stored.
#
# Example: sh honzi-repos-check.sh honzi/

# Check if at least 1 argument was passed.
if [ $# -lt 1 ]
then
    echo 'Missing argument: path'
    exit 2
fi

# Navigate to the target directory name
#   and create it if it doesn't exist.
mkdir -p $1
cd $1

# An array of all honzi repositories.
repositories='
files
honzi.github.io
Saria.htm
'

# `git status` cloned honzi repositories.
for repository in $repositories
do
    if [ -d $repository ]
    then
        echo 'checking https://github.com/honzi/'$repository
        cd $repository
        git status

    else
        echo 'https://github.com/honzi/'$repository' NOT YET CLONED'
    fi

    cd ..

    echo
done
