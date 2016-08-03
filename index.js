'use strict';

const fractal = require('./fractal.js');

const logger = fractal.cli.console;
const server = fractal.web.server();

server.on('error', err => logger.error(err.message));

return server.start(false).then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
});
