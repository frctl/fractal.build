'use strict';

/*
 * Create a new Fractal instance and export it for use elsewhere if required
 */

const fractal = module.exports = require('@frctl/fractal').create();

/*
 * General project configuration.
 */

fractal.set('project.title', 'Fractal Documentation');

/*
 * Configure docs.
 */

fractal.docs.engine(require('@frctl/nunjucks')());

fractal.docs.set('path', `${__dirname}/pages`);

/*
 * Configure the web interface.
 */

fractal.web.set('builder.dest', 'build');

fractal.web.theme(require('./theme')({

}));
