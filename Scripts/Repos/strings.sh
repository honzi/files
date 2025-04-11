#!/bin/sh
set -ux

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
eighth
fifth
first
fourth
getYear
introduction
maximum
minimum
ninth
noopener
repository
second
setYear
seventh
sixth
statistics
substr(
tenth
third
though
through
trimLeft
trimRight
'

for string in $strings
do
    grep -Filr --exclude-dir=".git" --exclude-dir="OldCode" --exclude="LICENSE.md" --exclude="strings.sh" "$string"
    echo
done
