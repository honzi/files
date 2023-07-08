#!/bin/sh
set -eux

# No args.
# Example usage: sh wakeup.sh

# CONFIGURE
sh ~/iterami/repos/files/Scripts/Ubuntu/configure.sh

# UPDATE
sh ~/iterami/repos/files/Scripts/Ubuntu/update.sh

# CLEANUP
sh ~/iterami/repos/files/Scripts/Ubuntu/cleanup.sh
