#!/bin/sh
set -eux

# Required args:
#   $1: Relative path to the root jovan-s/DTAUnpacker folder.
#   $2: Relative path to the root Mafia 1 install folder.
#   $3: Relative path to the folder in which you wish to
#         store the unpacked folders.
#
# Example usage: sh dta-unpack-all.sh repos/DTAUnpacker ~/.wine/drive_c/path/to/mafia backups/

# Check if at least 3 args were passed.
if [ $# -lt 3 ]
then
    echo 'Missing args: path_unpacker path_mafia path_backup'
    exit 1
fi

# Create temporary file links.
ln -s "$1/DTAUnpacker.exe" "$2"
ln -s "$1/tmp.dll" "$2"

# Navigate to the Mafia installation folder and run DTAUnpacker via wine.
cd "$2"
wine DTAUnpacker.exe A0.dta 0xD8D0A975 0x467ACDE0 # sounds/
wine DTAUnpacker.exe A1.dta 0x3D98766C 0xDE7009CD # missions/
wine DTAUnpacker.exe A2.dta 0x82A1C97B 0x2D5085D4 # MODELS/
wine DTAUnpacker.exe A3.dta 0x43876FEA 0x900CDBA8 # anims/
#wine DTAUnpacker.exe A4.dta 0x43876FEA 0x900CDBA8
wine DTAUnpacker.exe A5.dta 0xDEAC5342 0x760CE652 # DIFF/
wine DTAUnpacker.exe A6.dta 0x64CD8D0A 0x4BC97B2D # MAPS/
wine DTAUnpacker.exe A7.dta 0xD6FEA900 0xCDB76CE6 # Records/
#wine DTAUnpacker.exe A8.dta 0xD8DD8FAC 0x5324ACE5
wine DTAUnpacker.exe A9.dta 0x6FEE6324 0xACDA4783 # system/
wine DTAUnpacker.exe AA.dta 0x5342760C 0xEDEAC652 # tables/
wine DTAUnpacker.exe AB.dta 0xD8D0A975 0x467ACDE0 # sounds/music
#wine DTAUnpacker.exe AC.dta 0x43876FEA 0x900CDBA8

# Move unpacked folders.
mv anims "$3"
mv DIFF "$3"
mv MAPS "$3"
mv missions "$3"
mv MODELS "$3"
mv Records "$3"
mv sounds "$3"
mv system "$3"
mv tables "$3"

# Remove previously created temporary file links.
rm "$2/DTAUnpacker.exe"
rm "$2/tmp.dll"
