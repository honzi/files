#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are/will_be stored.
#   $2: Commit message.
#
# Example: sh honzi-repos-commit.sh honzi/ "This is a commit message!"

# Check if at least 2 arguments were passed.
if [ $# -lt 2 ]
then
    echo 'Missing argument: path commit-message'
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

# Pull updates for cloned honzi repositories
#   or clone them if they haven't been cloned yet.
for repository in $repositories
do
    if [ -d $repository ]
    then
        echo 'adding/committing https://github.com/honzi/'$repository
        cd $repository
        git add -A
        git commit -m "$2"
        cd ..

    else
        echo 'https://github.com/honzi/'$repository' NOT YET CLONED'
    fi

    echo
done
