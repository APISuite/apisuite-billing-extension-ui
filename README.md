# APISuite Portal UI Extension Demo

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

or, to watch the projecto for changes and rebuilding it:

```
npm run build:watch
```

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Release a new version

To release a new version use [npm's version command](https://docs.npmjs.com/cli/version).

For instance, to create a patch release, run:

    npm version patch

This will build the project, increment the version's patch field, commit these new changes and tag the commit.

Then, don't forget the push the repo and the tags:

    git push && git push origin --tags

### Installing Component Library Locally

While developing the extension, you might want to test it in the APISuite portal. You can install it there with

```
npm i --save ../../apisuite-extension-ui-demo/dev-symlink-target
```

The reason for referencing the `dev-symlink-target` folder is because itself references only the `package.json` file and the `build` folder. It leaves the `node_modules` folder out which allows us to use the same React instance that is installed by the APISuite portal for both the portal and the extension.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

You can then install your library into other projects by running:

```
npm i --save github:Cloudoki/apisuite-extension-ui-demo#branch-name
```

### Supporting Image Imports

Add the following library to your component library [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

```
npm i -D @rollup/plugin-image
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  image(),
  ...
]
...
```

You can then import and render images in your components like:

```tsx
import logo from './rollup.png'

export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
)
```

## Stack

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Acknowledgments

The repo is based on a stripped-down version of a React Component Library project skeleton. More info:

- [Repo](https://github.com/HarveyD/react-component-library)
- [Blog post](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

It also features:

- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components
# apisuite-billing-extension-ui
