'use strict';

const $ = require('cash-dom');

if (window.location.protocol.indexOf('file') !== 0) {
    const Pjax = require('pjax');
    new Pjax({
        elements:'.Frame--sidebar .Frame-body a:not([data-toclink])',
        selectors: ['title', '.Frame-main', '.Tree', '.Header']
    });
    $(document).on('pjax:complete', scrollToLocation);
}

if (location.hash) {
    setTimeout(() => {
        $('.Frame-main')[0].scrollTop = 0;
        scrollToLocation();
    }, 1);
}

$('.Frame--sidebar').on('click', '[data-toclink]', function(e){
    e.preventDefault();
    e.cancelBubble = true;
    let hash = this.href.split("#")[1];
    const target = $('.Frame-main #' + hash);
    if (target) {
        scrollTo(target, hash);
    }
});

function scrollTo(target, hash) {
    hash = hash.replace('#', '');
    const main = $('.Frame-main');
    const scrollOffset = target.position().top + 80;
    main[0].scrollTop = scrollOffset;
    history.pushState(null, null, `#${hash}`);
}

function scrollToLocation(){
    let hash = window.location.hash;
    if (!hash) return;
    const target = $('.Frame-main ' + hash);
    if (target) {
        scrollTo(target, hash);
    }
}
