
if (window.location.protocol.indexOf('file') !== 0) {
    const Pjax = require('pjax');
    new Pjax({
        elements:'.Frame-body a',
        selectors: ['title', '.Frame-main']
    });
    document.addEventListener('pjax:success', function(e){
        document.querySelectorAll('.Tree a')
    });
}
