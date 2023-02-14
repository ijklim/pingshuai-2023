# Ping Shuai Timing App

App to help time your swing during Ping Shuai Gong 平甩功 exercise.

Upgraded from Vue 2.5.9 to Vue 3.2

<p align="center">
  <a href="https://pingshuai.ivan-lim.com" target="_blank">
    <img src="https://raw.githubusercontent.com/ijklim/pingshuai-2023/main/public/screenshot-938.png" width="938px">
    <br>
    Live Demo
  </a>
</p>

## Vue 2 to Vue 3 Upgrade Notes

* Different launch instructions in `/src/main.js`

* Babel not required, requires Vite config file `/vite.config.js`

* Environment files located in the root folder, e.g. `/.env.development`

  * Loaded in `vite.config.js`, using `loadEnv` command and `define` key

  * Only key name starting with `VITE_` is available in the frontend

  * Can be accessed using `import.meta.env.VITE_...`, e.g. `src/components/Home.vue`

  * Ensure `/.env.production` is available before building for production, i.e. running `yarn build`


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Deployment

The app will NOT work if files in this repository are uploaded directly to the production server. The files here are suitable for development purpose.

Running the build command indicated above will create deployment ready files in the `dist` folder.

## Author

* [Ivan Lim](http://ivan-lim.com)


## License

This project is licensed under the MIT License - see the LICENSE file for details