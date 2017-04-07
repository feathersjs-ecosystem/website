Feathers
==================
> The marketing site for FeathersJS

<a href="https://www.netlify.com" target="_blank">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" />
</a>

## Getting Started

1. Install nodejs and npm
2. Run `npm install`
3. Run `npm run watch`
4. Go to [http://localhost:8080](http://localhost:8080/) in your browser

Now you can start editing content. Your content will automatically be rebuilt when things change and since we are using livereload your browser will automatically update with your changes.

## Building

Simply run `npm run build` to build the site, which runs through the appropriate gulp tasks.

## Deploying
The site currently gets deployed to [Netlify](https://www.netlify.com). In order to do this simplly commit to the master branch and it will kick off a build and Netlify will run the `npm run build` command. This will clean out any old files, rebuild the site with the production config, and deploy it.

## Structure

### `content/`

Contains the raw html and markdown pages for the site. These get compiled with the `layouts` and moved to the `build/` directory.

### `assets/`

This is where all the static assets live that end up getting compiled and/or copied to the `build/` directory. This includes:

- scripts
- images
- styles
- templates/layouts
- fonts
- any other static files

### `config/`

This directory holds the config values for production and development environments.

### `build/`

These are all the files that get deployed to Netlify.
