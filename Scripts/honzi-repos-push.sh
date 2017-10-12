#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are/will_be stored.
#
# Example: sh honzi-repos-push.sh honzi/

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
IDTC
Saria.htm
'

# Push cloned honzi repositories.
for repository in $repositories
do
    if [ -d $repository ]
    then
        echo 'pushing https://github.com/honzi/'$repository
        cd $repository
        git push origin HEAD
        cd ..

    else
        echo 'https://github.com/honzi/'$repository' NOT YET CLONED'
    fi

    echo
done
