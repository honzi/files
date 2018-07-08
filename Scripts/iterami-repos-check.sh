#!/bin/sh

# Required arguments:
#   $1: Relative path to the directory in which the
#         iterami repositories are/will_be stored.
#
# Example: sh iterami-repos-check.sh repositories/

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

# An array of all iterami repositories.
iterami_repositories='
9YG0E6r.htm
Alarm.htm
Aquarium-2D.htm
AspectRatio.htm
Avoidance-2D.htm
BaseConverter.htm
BinaryDataEndecoder.htm
Birthday.htm
Bookmarklets.htm
Calculator.htm
Chromium-iterami-DevTools
Chromium-iterami-Extension
Chromium-iterami-Theme
Click.htm
Clock.htm
ColorDrops.htm
ColorSelector.htm
ColorSquares.htm
ColorSteps.htm
ColorWaves.htm
common
ConfigFiles
Countdown.htm
D2LoD-ArcaneSanctuary.htm
Documentation.htm
DotEyeIllusion.htm
Dropdown.htm
Duel.htm
EmojiText.htm
ESP-Test.htm
EVETools.gtk
ExperienceCalculator.htm
FileBrowser.gtk
Fireworks-2D.htm
FractalRunner-2D3D.htm
GitHub-API.htm
Guess.htm
Guides.htm
Hallway-2D3D.htm
Hexagons-2D.htm
Hrad.htm
InterestCalculator.htm
IssueExport.htm
iterami.github.io
Jetpack-2D.htm
LayeredSnake-2D3D.htm
LocalStorage.htm
Match.htm
Multiverse.htm
MultiverseEditor.gtk
MultiverseEditor.htm
MultiverseLevels.htm
OS.asm
Particleball-2D.htm
ParticleRun-2D.htm
PasswordGenerator.htm
Percentages.htm
PixelEditor.htm
Platform-2D.htm
Platform-2D.sh
PlusPlus.htm
Poem.htm
ProcessEditor
QjnyYap.htm
Race-2D.htm
Rain-2D.htm
RandomRepository.htm
RandomSCP.htm
ReactionTest.htm
RNG.htm
RockPaperScissors.htm
RomanNumerals.htm
RPG-Above.htm
RPG-Side.htm
RTS-2D.htm
RTS-Boxing.htm
SC-AI.cpp
Scripts
Shooter-2D.htm
Slots.htm
Snakish.htm
SnowyMountains.htm
SolarSystem-2D.htm
SpeedButton.htm
SpeedShape.htm
SpeedText.htm
SpeedType.htm
Starfield-2D3D.htm
Sudoku.htm
TextEditor.gtk
TextInfo.htm
Time.htm
TimeColors.htm
Timer.htm
TinyMCE-Editor.htm
Trains-2D.htm
Trigonometry.htm
Tubes-2D3D.htm
U1.htm
UnitConverter.htm
URIViewer.htm
Warped.htm
WASD-2D.htm
WindowInfo.htm
WZ2100-AI.js
'

# `git status` cloned iterami repositories.
for repository in $iterami_repositories
do
    if [ -d $repository ]
    then
        echo 'checking https://github.com/iterami/'$repository
        cd $repository
        git status
        cd ..

    else
        echo 'https://github.com/iterami/'$repository' NOT YET CLONED'
    fi

    echo
done
