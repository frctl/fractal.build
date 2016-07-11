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
        linkTo: function(handle, linkText){
            const pathify = this.env.getFilter('path');
            const page = fractal.docs.find(handle);
            let path   = page ? pathify.call(this, `/${page.path}`) : '#';
            linkText   = linkText || page.label;
            return `[${linkText}](${path})`;
        },
        image: function(srcPath, altText){
            altText = altText || '';
            const pathify = this.env.getFilter('path');
            const path = pathify.call(this, `/${fractal.web.get('assets.mount')}/images/${srcPath}`)
            return `![${altText}](${path})`;
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

/*
 * Configure an asset source
 */

fractal.assets.add('images', {
    path: 'assets/img',
    match: ['**/*']
});
