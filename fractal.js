'use strict';

/*
 * Create a new Fractal instance and export it for use elsewhere if required
 */

const fractal = module.exports = require('@frctl/fractal').create();

/*
 * General project configuration.
 */

fractal.set('project.title', 'Fractal Documentation');
fractal.set('project.version', '1.0.0-beta');
fractal.set('project.tag', '@beta');

/*
 * Configure docs.
 */

fractal.docs.set('path', `${__dirname}/docs`);

/*
 * Configure the web interface.
 */

fractal.web.set('server.sync', true);
fractal.web.set('builder.dest', 'dist');

fractal.web.theme(require('./theme')({
    imagePath: 'assets/img',
    includePaths: [`${__dirname}/helpers`]
}));

fractal.web.set('builder.urls.ext', null);
