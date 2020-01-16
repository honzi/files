#!/bin/bash

# No args.
# Example usage: sh link-ai.sh

# Make the required directories.
mkdir $HOME/.warzone2100-3.1/mods
mkdir $HOME/.warzone2100-3.1/mods/autoload

# Link the AI directories.
ln -fs $HOME/.iterami/repositories/WZ2100-AI.js/ai/cyborg-machinegun $HOME/.warzone2100-3.1/mods/autoload
ln -fs $HOME/.iterami/repositories/WZ2100-AI.js/ai/missilefortress $HOME/.warzone2100-3.1/mods/autoload
