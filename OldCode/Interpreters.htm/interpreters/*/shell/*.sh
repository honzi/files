#!/bin/sh

if [ "$1" = "*" ]
then
    echo "Hello World"

elif [ "$1" = " * " ]
then
    shuf -i 0-9223372036854775807 -n 1

elif [ "$1" = "*+*" ]
then
    while true
    do
        :
    done
fi
