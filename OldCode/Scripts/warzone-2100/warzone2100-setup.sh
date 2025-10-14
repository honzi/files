#!/bin/bash
set -eux

# No args.
# Example usage: sh warzone2100-setup.sh

# Create the required folders.
mkdir -p ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
mkdir -p ~/snap/warzone2100/common/warzone2100/mods/4.3.5/multiplay
mkdir -p ~/snap/warzone2100/common/warzone2100/mods/4.3.5/multiplay/skirmish

# Copy the AI files.
cp -r ~/iterami/repos/WZ2100-AI.js/mods/autoload/iterami-competitive/ ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
cp -r ~/iterami/repos/WZ2100-AI.js/mods/autoload/iterami-cyborgswarm/ ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
cp -r ~/iterami/repos/WZ2100-AI.js/mods/autoload/iterami-missilefortress/ ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
cp -r ~/iterami/repos/WZ2100-AI.js/mods/autoload/iterami-turtle/ ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
cp -r ~/iterami/repos/WZ2100-AI.js/mods/autoload/iterami-turtle-cyborgswarm/ ~/snap/warzone2100/common/warzone2100/mods/4.3.5/autoload
cp ~/iterami/repos/WZ2100-AI.js/multiplay/skirmish/iterami.js ~/snap/warzone2100/common/warzone2100/mods/4.3.5/multiplay/skirmish
