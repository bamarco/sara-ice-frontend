#!/usr/bin/env sh

mkdir -p public/schemas
cp -r schemas/* public/schemas/
find public/schemas -name '*.schema.json' -exec bash -c 'mv "$1" "${1%.schema.json}"' _ {} \;
