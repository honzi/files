#!/bin/bash

# No arguments.

# List of cfg directory diffs.
games=(
  "GarrysMod/garrysmod"
  "Half-Life 2/hl2"
  "Half-Life 2/episodic"
  "Half-Life 2/ep2"
  "Team Fortress 2/tf"
)

for game in "${games[@]}"
do
    path="$HOME/.steam/steam/steamapps/common/$game/cfg"

    # The directory must already exist.
    if [[ -d $path ]]
    then
        # Create the symbolic link.
        ln -fs "$HOME/.iterami/repositories/files/Config/$game/cfg/autoexec.cfg" "$path/autoexec.cfg"

        echo 'linked '$game
        echo
    fi
done
