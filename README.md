# API Suite Billing Extension UI

## About

This repo contains API Suite's Billing Extension's UI.

For more high-level documentation regarding the UI Extensions, refer to the [UI Extensions documentation in Confluence](https://cloudoki.atlassian.net/wiki/spaces/AS/pages/275054593/UI+Extensions).

## Development

### Hooks

Extensions hook into the APISuite Portal's rendering process by implementing specific interfaces for each type of hook:

#### Menu

This hook allows Extensions to add entries to the different menus of the Portal.

Check file `hooks/menu.ts` for an example.

#### Pages

This hook allows adding new pages with a given URI to the Portal

Check file `hooks/pages.ts` for an example.

#### Sections

This hook allows adding a new section/component to certain pre-defined sections of the Portal.

Check file `hooks/sections.ts` for an example.

### Testing

```
npm run test
```

### Building

```
npm run build
```

or, to watch the project for changes and rebuilding it:

```
npm run build:watch
```

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

While developing the extension, you might want to test it in the APISuite portal. You can install it there with

```
npm i --save ../../apisuite-billing-extension-ui/dev-symlink-target
```

The reason for referencing the `dev-symlink-target` folder is because itself references only the `package.json` file and the `build` folder. It leaves the `node_modules` folder out which allows us to use the same React instance that is installed by the APISuite portal for both the portal and the extension.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

You can then install your library into other projects by running:

```
npm i --save github:APISuite/apisuite-billing-extension-ui#branch-name
```

### Translations

Some of this extension's translation strings may contain replacement tags that follow a pattern of <some_number>...</some_number> (e.g., <0>...</0>).

These are used to replace these tags with some others to e.g., turn some translated plain text into a link.

Translations keys where this is available:

- `extensions.billing.changeSubscriptionDialog.warning`:
  - `extensions.billing.changeSubscriptionDialog.warning.text`: Placeholder text where a replacement tag can be inserted;
  - `extensions.billing.changeSubscriptionDialog.warning.url`: URL to replace in `warning.text`

