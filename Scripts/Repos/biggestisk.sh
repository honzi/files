#!/bin/sh
set -eu

# Required args:
#   $1: Relative path to the biggestisk folder.
#
# Example usage: sh biggestisk.sh repos/biggestisk/

# Check if at least 1 arg was passed.
if [ $# -lt 1 ]
then
    echo 'Missing args: path'
    exit 1
fi

# Navigate to the target folder.
cd $1

# Loop through each line and update the number.
IFS='\n'
i=1
start=10
end=$((start+747))

while IFS= read -r line; do
  if [ $i -ge $start ] && [ $i -lt $end ]
  then
      linenumber=$((i-start+1))
      lineprefix="\ "
      if [ $linenumber -lt 100 ]
      then
          lineprefix="\ $lineprefix"
          if [ $linenumber -lt 10 ]
          then
              lineprefix="\ $lineprefix"
          fi
      fi
      updatedline=$( echo "$line" | cut -b 6- )
      sed -i "$i c $lineprefix$linenumber $updatedline" README.md

      if [ $(( linenumber % 100 )) -eq 0 ]; then
          echo $linenumber
      fi
  fi
  i=$((i+1))
done < README.md
