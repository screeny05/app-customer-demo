# App Customer Demo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things with Laioutr.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- A demo connector for a custom hygraph schema
- Some sections and blocks for use in the studio

## Quick Setup

Before installing dependencies, you need to create a copy of the `.npmrc.config` file called `.npmrc` and fill in the `NPM_TOKEN_HERE` with your npm token. You can find this token in your [project settings](https://cockpit.laioutr.cloud/o/_/p/_/settings).

- `pnpm i`
- `npx @laioutr/cli project fetch-rc -p <organization slug>/<project slug> -s <project secret key>` - This will load the `laioutrrc.json` file with the current remote project configuration.
- `pnpm dev:prepare`
- `pnpm orchestr-dev`

### Running the orchestr playground

Running `pnpm orchestr-dev` will start the orchestr playground. This playground is the ideal place for implementing new functionality using orchestr. You can either use the query-builder or the request editor to test the demo implementation of hygraph.

For example, try running the following query:

```json
{
  "clientEnv": {
    "locale": "de-DE",
    "currency": "EUR",
    "custom": {}
  },
  "queries": [
    {
      "queryName": "hygraph/hotel/all",
      "id": "ux72beq9xt",
      "components": ["base"],
      "links": {
        "hygraph/hotel/destinations": {
          "components": ["base"]
        }
      }
    }
  ]
}
```

This will load all hotels and their destinations from the connected hygraph instance.

Note: All files in the `src/runtime/server/orchestr` folder are auto-loaded by orchestr. That means that you can only add files in there which export a NitroPlugin. Adding other files will not work and throw an error.

### Running the playground

Running `pnpm dev` will start the regular playground. This can be used together with a `laioutrrc.json` file to connect to an actual project in the cockpit and test the implementation of the module.

Connecting to a cockpit project will allow you to test with actual data from the project.

To connect, you need to open the [studio-page](https://cockpit.laioutr.cloud/o/_/p/_/studio) of the project you used to run the `npx @laioutr/cli project fetch-rc` command. Then, press `⌘+K` or `Ctrl+K` to open the command palette and run the command `Developer: Use Localhost`. This will reload the studio and connect to your localhost app.

Note: When adding new sections or blocks in this project, you currently need to restart the playground and reload the studio to see the changes. When changing fields in existing sections or blocks, you need open up the command palette and run the command `Developer: Reload Client Context` or refresh the page. This will be fixed in a future version.

That's it! You can now use App Customer Demo in your Nuxt app ✨
