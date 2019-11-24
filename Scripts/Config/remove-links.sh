#!/bin/bash

# No arguments.
# Example usage: bash remove-links.sh

# List of config file destination directory paths.
destinations=(
  "$HOME/Documents/EVE/Overview/iterami-overview.yaml"
  "$HOME/.wine/drive_c/Program Files (x86)/Electronic Arts/Crytek/Crysis SP Demo/Game/Config/diff_bauer.cfg"
  "$HOME/.steam/steam/steamapps/common/GarrysMod/garrysmod/cfg/autoexec.cfg"
  "$HOME/.wine/drive_c/Program Files (x86)/Gothic III Demo/Ini/ge3.ini"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/hl2/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/episodic/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/ep2/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Half-Life 2/lostcoast/cfg/autoexec.cfg"
  "$HOME/.wine/drive_c/Program Files (x86)/Ubisoft/Dark Messiah of Might and Magic Demo/mm/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Portal/portal/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Portal 2/portal2/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/autoexec.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/demoman.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/engineer.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/heavyweapons.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/medic.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/pyro.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/scout.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/sniper.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/soldier.cfg"
  "$HOME/.steam/steam/steamapps/common/Team Fortress 2/tf/cfg/spy.cfg"
  "$HOME/.steam/steam/steamapps/common/The Stanley Parable/thestanleyparable/cfg/autoexec.cfg"
  "$HOME/.wine/drive_c/Program Files (x86)/Thief - Deadly Shadows Demo/System/Default.ini"
  "$HOME/.wine/drive_c/Program Files (x86)/Thief - Deadly Shadows Demo/System/T3UI.ini"
  "$HOME/Documents/Thief - Deadly Shadows Demo/SaveGames/User Options/options.ini"
)

for i in {0..24}
do
    rm "${destinations[i]}"
done
