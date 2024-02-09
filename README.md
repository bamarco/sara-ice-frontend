# SARA ICE Frontend
Skin Allergy Risk Assessment - Integrated Chemical Environment

Frontend for the SARA-ICE local deployment.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Generate documentation
JSON Schemas for the datatypes used in this project are provided in [schemas](/src/assets/schemas). A Human readable version can be found at [schema docs](public/docs/schemas/).

You can generate the human readable schemas by running 
```sh
npm run docs
```

### Package schemas for static serving
This command will convert the json schemas to drop the `.schema.json` file extension both 
within the files and outside the files for serving statically from the public folder.

**NOTE:** Currently this command will naively delete any exact substring matching `
.schema.json` within the schema regardless of context. This is not currently a problem, 
but could become a problem if that exact string is needed in documentation strings or to 
refer to external schemas.

```sh
npm run pack-schemas
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
