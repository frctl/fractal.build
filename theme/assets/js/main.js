
if (window.location.protocol.indexOf('file') !== 0) {
    const Pjax = require('pjax');
    new Pjax({
        elements:'a',
        selectors: ['title', '.Frame-main']
    });
}
