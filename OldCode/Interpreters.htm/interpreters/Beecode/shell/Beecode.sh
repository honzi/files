#!/bin/sh

input=$(echo $1 | tr 'A-Z' 'a-z')

if [ "$input" = "bee" ]
then
    echo "According to all known laws of aviation, there is no way a bee should be able to fly."
fi
