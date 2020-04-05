#!/bin/bash
set -eu

# No args.

#########################
Draw(){
    # No args.

    countx=0
    county=0
    pixels=$pixelcount
    screen=''

    while [ $pixels -gt 0 ]
    do
        atom='-'
        coordxtmp=$((countx-coordx))
        coordytmp=$((county-coordy))

        if [ $playerx -eq $coordxtmp -a $playery -eq $coordytmp ]
        then
            atom='♀'
        else
            xtrue=false
            for coord in $world
            do
                if [ $xtrue = true -a $coord -eq $coordytmp ]
                then
                    atom='■'
                    xtrue=false
                elif [ $coord -eq $coordxtmp ]
                then
                    xtrue=true
                fi
            done
        fi

        screen=$screen$atom

        countx=$((countx+1))
        if [ $countx -ge $width -a $pixels -gt $width ]
        then
            screen=$screen'\n'
            countx=0
            county=$((county+1))
        fi

        pixels=$((pixels-1))
    done

    echo -e $screen
}

ExitCleanup(){
    # No args.

    # Restore terminal settings.
    stty $settings
    echo ' bye'
}

Load(){
    # No args.

    echo -n 'Loading iterami/Platform-2D.sh ...'

    # Save terminal settings to restore them later.
    settings=$(stty -g)

    height=`tput lines`
    height=$((height-1))
    playerx=0
    playery=0
    width=`tput cols`
    world='0 1'

    coordx=$((width/2))
    coordy=$((height/2))
    pixelcount=$((height*width))

    trap ExitCleanup EXIT

    echo 'done!'
}

FrameLoop(){
    # No args.

    Draw

    while [ true ]
    do
        read key

        if [ $key ]
        then
            if [ $key = 'a' ]
            then
                playerx=$((playerx-1))
            elif [ $key = 'd' ]
            then
                playerx=$((playerx+1))
            fi
        fi

        Draw
    done
}
#########################
Load
read -p 'Press ENTER to play the debug level...'
FrameLoop
