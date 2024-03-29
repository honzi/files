#!/bin/sh
set -eux

# No args.
# Example usage: sh crysis-disable-intro.sh

# Navigate to the intro file folder.
cd ~/.wine/drive_c/Program\ Files\ \(x86\)/Electronic\ Arts/Crytek/Crysis\ SP\ Demo/Game/Localized/Video

# Make a backup folder if it doesn't exist.
mkdir -p BACKUP

# Move the intro files to a backup folder.
mv CryTek.sfd BACKUP
mv Trailer_Crytek.sfd BACKUP
mv Trailer_CrytekC.sfd BACKUP
mv Trailer_DemoLegal.sfd BACKUP
mv Trailer_EA.sfd BACKUP
mv Trailer_Intel.sfd BACKUP
mv Trailer_NVidia.sfd BACKUP
mv Trailer_PEGI.sfd BACKUP
mv Trailer_Rating_Full.sfd BACKUP
mv Trailer_Rating_Logo.sfd BACKUP
