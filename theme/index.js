'use strict';

const Path        = require('path');
const _           = require('lodash');
const Theme       = require('@frctl/fractal').WebTheme;
const packageJSON = require('../package.json');

module.exports = function(options){

    const config = _.defaultsDeep(_.clone(options || {}), {

    });

    const theme = new Theme(Path.join(__dirname, 'views'), config);

    theme.setErrorView('error.nunj');
    theme.addStatic(Path.join(__dirname, 'dist'), '/theme');

    theme.addRoute('/:path(.*?)', {
        handle: 'page',
        view: 'page.nunj'
    }, function(app){
        return app.docs.filter(d => (!d.isHidden)).flatten().map(page => ({path: page.path}));
    });

    theme.on('init', function(env, app){
        env.engine.addFilter('url', (item) => (! item.path ? '/' : theme.urlFromRoute('page', {path: item.path})));
    });

    return theme;
};
