#!/usr/bin/env sh

DOC_DIR=public/docs/schemas
SCHEMA_DIR=src/assets/schemas

. .venv/bin/activate
mkdir -p $DOC_DIR
generate-schema-doc $SCHEMA_DIR $DOC_DIR
find $DOC_DIR -name '*.schema.html' -exec bash -c 'mv "$1" "${1%.schema.html}"' _ {} \;
deactivate
