# reactron-boilerplate

![](https://i.imgur.com/T95ZyDI.png)

[![HitCount](http://hits.dwyl.io/michaeldegroot/reactron-boilerplate.svg)](http://hits.dwyl.io/michaeldegroot/reactron-boilerplate) [![Node version](https://img.shields.io/node/v/cipher-chain.svg)](https://www.npmjs.com/package/cipher-chain) [![Licensing](https://img.shields.io/github/license/michaeldegroot/reactron-boilerplate.svg)](https://raw.githubusercontent.com/michaeldegroot/reactron-boilerplate/master/LICENSE) [![Repo size](https://img.shields.io/github/repo-size/michaeldegroot/reactron-boilerplate.svg.svg)](https://github.com/michaeldegroot/reactron-boilerplate.svg) [![Help us and star this project](https://img.shields.io/github/stars/michaeldegroot/reactron-boilerplate.svg?style=social)](https://github.com/michaeldegroot/reactron-boilerplate)

`reactron-boilerplate` is a simple to use, simple to understand, no webpack, no gulp/grunt, non ejected `react` desktop app run on `electron`.

This boilerplate is ment to be expanded on by the git cloner, gives you the bare basics to make awesome stuff quick.

- [x] _Easy customization_
- [x] _Hot reload and auto restarts_
- [x] _Distribution management_
- [x] _Database handling, migrations_
- [x] _Unit testing_
- [x] _Splash window_
- [x] _Electron for desktop code_
- [x] _React for User interface_
- [x] _Objection.js (knex.js) for database layer (mysql, mysql2, sqlite, postgres, etc)_
- [x] _Inter Process Communication (send/receive between main/renderer windows)_
- [ ] _JSX file support (To be implemented)_
- [ ] _Redux (to be determined)_
- [ ] _PostCSS/SASS? (to be determined)_
- [ ] _Typescript (to be determined)_
- [ ] _Optional webpack? (to be determined)_

**Please note:**
_This boilerplate will be changing a lot at it's lifecycle start, it is currently in it's infancy, a lot of things are subject to change. If you want to experiment right now it is recommended to fork the repo (or use version tagging/lock) so you can work on frozen version of the code where you can update on your own leisure_

### Tech Stack

###### Desktop

- ![](https://i.imgur.com/qf8vXHi.png) Electron

###### User Interface

- ![](https://i.imgur.com/zcJJSVm.png) React

###### Database

- ![](https://i.imgur.com/ETYR7Uo.png) Objection.js
- Knex.js

###### Distribution

- electron-builder

###### Other Library's

- custom-electron-titlebar
- electron-util
- electron-window-state

## Project Overview

```js
app
└── knexfile.js          // Database configuration
└── build                // react build output
└── dist                 // electron-builder output folder
└── main-process         // Ipc main events
└── migrations           // Knex migrations
└── model                // Objection model files
└── public
    └── index.html       // Main window entry
    └── splash.html      // Splash window entry
    └── db.js            // Knex/objection integration
    └── electron.js      // Main process
└── src                  // Renderer process (jsx, js, css)
    └── setupTests.js    // jest-dom adds custom jest matchers for asserting on DOM nodes. This file allows this
    └── serviceWorker.js // A service worker script that the renderer runs in the background separate from the process.
    └── index.css
    └── index.js         // JSX Index renderer
    └── media            // images, sounds, videos, etc
    └── components       // JSX components
        └── App          // Test JSX Component App
```

## Install

```bash
git clone git@github.com:michaeldegroot/reactron-boilerplate.git
cd reactron-boilerplate
npm install
```

## Development

###### Testing

```bash
npm run test
```

Tests are located in `src/components/App/App.test.js` for example

###### Developing

_Development and auto reload/restart scripts are activated by the following command_

```bash
npm run dev
```

this will activate a watch script for changes and auto boot the electron window, unless there was a error (will show in console)

## Production

###### Building

```bash
npm run build
```

###### Distribution

_You can create distribution files (installation/exe) but you will need to sign them yourself_

```bash
npm run dist
```

checkout [package.json](https://github.com/michaeldegroot/reactron-boilerplate/blob/master/package.json) and [electron-builder](https://github.com/electron-userland/electron-builder) for more info

## License

Copyright (c) 2020 by [GiveMeAllYourCats](https://github.com/michaeldegroot). Some rights reserved.<br>
[reactron-boilerplate](https://github.com/michaeldegroot/reactron-boilerplate) is licensed under the MIT License as stated in the [LICENSE file](https://github.com/michaeldegroot/reactron-boilerplate/blob/master/LICENSE).
