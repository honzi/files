#!/bin/bash

# No arguments.

# List of config file source paths.
configs=(
  "$HOME/.iterami/repositories/files/Config/Crysis/diff_bauer.cfg"
  "$HOME/.iterami/repositories/files/Config/GarrysMod/garrysmod/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Half-Life 2/hl2/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Half-Life 2/episodic/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Half-Life 2/ep2/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Half-Life 2/lostcoast/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Might-and-Magic/Dark-Messiah/mm/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Portal/portal/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Portal 2/portal2/cfg/autoexec.cfg"
  "$HOME/.iterami/repositories/files/Config/Team Fortress 2/tf/cfg/autoexec.cfg"
)
# List of config file destination directory paths.
destinations=(
  "$HOME/.wine/drive_c/Program Files (x86)/Electronic Arts/Crytek/Crysis SP Demo/Game/Config/"
  "$HOME/.steam/steam/steamapps/common/GarrysMod/garrysmod/cfg/"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/hl2/cfg/"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/episodic/cfg/"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/ep2/cfg/"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/lostcoast/cfg/"
  "$HOME/.wine/drive_c/Program Files (x86)/Ubisoft/Dark Messiah of Might and Magic Demo/mm/cfg"
  "$HOME/.steam/steam/steamapps/common/Portal/portal/cfg/"
  "$HOME/.steam/steam/steamapps/common/Portal 2/portal2/cfg/"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/"
)

for i in {0..8}
do
    # The destination directory must already exist.
    if [[ -d ${destinations[i]} ]]
    then
        # Create the symbolic link.
        ln -fs "${configs[i]}" "${destinations[i]}"

        echo 'linked '${configs[i]}
        echo
    fi
done
