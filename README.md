Feathers
==================
> The marketing site for FeathersJS

## Getting Started

1. Install nodejs and npm
2. run `npm install`
3. run `npm run watch` 
4. open your `build/index.html` file in your browser

Now you can start editing content. Your content will automatically be rebuilt when things change and you can just reload your browser at any time.

## Building

Simply run `npm run build` to build the site.

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
