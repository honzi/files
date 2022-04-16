#!/bin/sh
set -eux

# No args.
# Example usage: sh registry-rebuild.sh

# Download registry_rebuild
#   if it hasn't been downloaded yet.
drush dl rebuild_registry -n

# Rebuild the registry.
drush registry-rebuild

# Clear all caches.
drush cache-clear all
