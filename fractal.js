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

fractal.docs.engine(require('@frctl/nunjucks')({
    globals: {
        linkTo: function(handle){
            const page = fractal.docs.find(handle);
            return page ? `/${page.path}` : '#';
        }
    }
}));

fractal.docs.set('path', `${__dirname}/docs`);

/*
 * Configure the web interface.
 */


fractal.web.set('server.sync', true);
fractal.web.set('builder.dest', 'build');

fractal.web.theme(require('./theme')({

}));
