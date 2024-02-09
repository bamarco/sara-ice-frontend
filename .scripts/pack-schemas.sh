#!/usr/bin/env sh

mkdir -p public/schemas
cp -r src/assets/schemas/* public/schemas/
# find public/schemas -name '*.schema.json' -exec bash -c 'mv "$1" "${1%.schema.json}"' _ {} \;
find public/schemas -name '*.schema.json' -exec bash -c 'sed "s/\.schema\.json//" "$1" > "${1%.schema.json}"' _ {} \;
rm -r public/schemas/*.schema.json
