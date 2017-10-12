#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         honzi repositories are/will_be stored.
#
# Example: sh honzi-repos-fetch.sh honzi/

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

# Pull updates for cloned honzi repositories
#   or clone them if they haven't been cloned yet.
for repository in $repositories
do
    if [ -d $repository ]
    then
        echo 'pulling https://github.com/honzi/'$repository
        cd $repository
        git pull

    else
        git clone https://github.com/honzi/$repository.git
        cd $repository
        git remote set-url origin https://honzi@github.com/honzi/$repository.git
        echo 'cloned and set origin url for https://github.com/honzi/'$repository
    fi

    git config user.email "czechinthemail@gmail.com"
    git config user.name "Jan Hořava"

    cd ..

    echo
done
