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
Avoidance-2D.htm
BaseConverter.htm
BinaryDataEndecoder.htm
Birthday.htm
Blog.php
Calculator.htm
ChatBot.py
Chrome-iterami
Click.htm
Clock.htm
ColorDrops.htm
ColorSelector.htm
ColorSquares.htm
ColorSteps.htm
ColorWaves.htm
common
ConfigFiles
ContactForm.htm
ContactForm.php
Countdown.htm
D2LoD-ArcaneSanctuary.htm
DesertStreetMarket.htm
Documentation.htm
DotEyeIllusion.htm
DrinkingGames.htm
Dropdown.htm
Drupal-alter_field_maxlength
Drupal-callipepla
Drupal-delete_ghost_fields
Drupal-disable_window_alert
Drupal-integer_to_decimal
Drupal-move_field_description
Drupal-workflow_transitions_roles_fix
Duel.htm
EmojiText.htm
eog-Plugin-MenuEnhancer
ESP-Test.htm
ExperienceCalculator.htm
FakeLogin.php
Fireworks-2D.htm
Forums
FractalRunner-2D3D.htm
Functions.php
gedit-Plugin-MenuEnhancer
GitHub-API.htm
Guess.htm
Guides.htm
Hallway-2D3D.htm
Hexagons-2D.htm
Hrad.htm
Info.php
InterestCalculator.htm
Inventory.php
IP.php
iterami.github.io
Jetpack-2D.htm
LayeredSnake-2D3D.htm
LocalStorage.htm
Market
Match.htm
OfficeTowers.htm
OS.asm
Particleball-2D.htm
ParticleRun-2D.htm
PasswordGenerator.htm
Percentages.htm
PixelEditor.htm
Platform-2D.htm
Platform-2D.sh
Platform-3D.htm
PlusPlus.htm
Poem.htm
ProcessEditor
QjnyYap.htm
Race-2D.htm
Race-3D.htm
Rain-2D.htm
Rain-3D.htm
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
Starfield-3D.htm
Sudoku.htm
SurrealIntermission.htm
TemplateEngine.php
TemplateEngine-Lite.php
Terminal.htm
TextEditor.htm
TextInfo.htm
ThemePark-3D.htm
Time.htm
TimeColors.htm
Timeline.js
Timer.htm
TinyMCE-Editor.htm
Trains-2D.htm
Trains-3D.htm
Trigonometry.htm
Tubes-2D3D.htm
U1.htm
UnitConverter.htm
Vidce.htm
Warped.htm
WebScraper.py
WebServer.py
Wiki.php
WindowInfo.htm
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
