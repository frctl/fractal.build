
if (window.location.protocol.indexOf('file') !== 0) {
    const Pjax = require('pjax');
    new Pjax({
        elements:'.Frame-body a',
        selectors: ['title', '.Frame-main', '.Tree', '.Header']
    });
    console.log('asd');
}

function toArray(nodeList) {
    return [].slice.call(nodeList);
}

function $(s, context){
    context = context || document;
    return context.querySelector(s);
}

function $$(s, context){
    context = context || document;
    return toArray(context.querySelectorAll(s));
}
