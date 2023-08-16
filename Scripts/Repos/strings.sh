#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the folder in which
#         the iterami repos are stored.
#
# Example usage: sh strings.sh repos/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing arg: path'
    exit 1
fi

cd $1

strings='
argument
combination
configuration
conversation
corporation
difference
documentation
introduction
noopener
repository
statistics
though
through
'

for string in $strings
do
    grep -Filr --exclude-dir=".git" --exclude-dir="OldCode" --exclude="LICENSE.md" --exclude="strings.sh" "$string"
    echo
done
