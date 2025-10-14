#!/bin/sh
set -eux

# Version: 22.02
# No args.
# Example usage: sh offline.sh

# CONFIGURE
sh ~/iterami/repos/files/Scripts/Ubuntu/configure.sh

# CLEANUP
sh ~/iterami/repos/files/Scripts/Ubuntu/cleanup.sh
