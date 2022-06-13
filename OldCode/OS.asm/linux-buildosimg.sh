#!/bin/sh
set -eux

# No args.

# Create os-asm.bin
nasm -f bin kernel/kernel.asm -o os-asm.bin -Oxv

# Use os-asm.bin to create os-asm.img
dd if=os-asm.bin of=os-asm.img bs=512 count=1

# Delete os-asm.bin
rm os-asm.bin
