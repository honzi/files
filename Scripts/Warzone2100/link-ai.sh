#!/bin/bash
set -eux

# No args.
# Example usage: sh link-ai.sh

# Make the required folders.
mkdir $HOME/.warzone2100-3.1/mods
mkdir $HOME/.warzone2100-3.1/mods/autoload

# Link the AI folders.
ln -fs $HOME/.iterami/repos/WZ2100-AI.js/ai/cyborg-machinegun $HOME/.warzone2100-3.1/mods/autoload
ln -fs $HOME/.iterami/repos/WZ2100-AI.js/ai/missilefortress $HOME/.warzone2100-3.1/mods/autoload
