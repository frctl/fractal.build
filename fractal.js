'use strict';

/*
 * Create a new Fractal instance and export it for use elsewhere if required
 */

const fractal = module.exports = require('@frctl/fractal').create();
const logger = fractal.cli.console;

/*
 * General project configuration.
 */

fractal.set('project.title', 'Fractal Documentation');
fractal.set('project.version', '1.0.0-beta');
fractal.set('project.tag', '@beta');

/*
 * Configure docs.
 */

fractal.docs.engine(require('@frctl/nunjucks')({
    globals: {
        link: function(handleAnchor, linkText){
            const handleParts = handleAnchor.split('#');
            const handle      = handleParts[0];
            const anchor      = handleParts[1] ? `#${handleParts[1]}` : '';
            const pathify     = this.env.getFilter('path');
            const page        = fractal.docs.find(handle);
            let path          = page ? pathify.call(this, `/${page.path}`) : '';
            linkText          = linkText || page.label;
            if (path === '') {
                logger.error(`Could not create link to ${handleAnchor}`);
            }
            return `[${linkText}](${path}${anchor})`;
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
fractal.web.set('builder.dest', 'dist');

fractal.web.theme(require('./theme')({

}));

/*
 * Configure an asset source
 */

fractal.assets.add('images', {
    path: 'assets/img',
    match: ['**/*']
});
