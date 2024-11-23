#!/bin/bash

PROGRAMMER=$(git config user.name)
DATE=$(date)

for FILE in $(git diff --cached --name-only | grep -E "\.ts$")
do
   if [[ -f "$FILE" ]]; then
      if ! grep -q "Programmer: $PROGRAMMER" "$FILE"; then
         echo -e "/*\n Programmer: $PROGRAMMER\n Date: $DATE\n*/\n$(cat "$FILE")" > "$FILE"
         git add "$FILE"
      fi
   fi
done
