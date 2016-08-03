---
title: Fractal API documentation
handle: api
---

Fractal provides a programmatic API that allows you to {{ link('@custom-commands', 'write custom commands') }}, {{ link('@build-tools', 'tie it into your build tools') }} or help with integrating your component library into your {{ link('@production', 'production site or application') }}.

If you've created a {{ link('@project-settings', 'project settings file') }} for your project then you have already interacted with the Fractal API.

All API methods are called on an instance of Fractal or one of the objects it exposes. To get a new instance of Fractal, first `require` the `@frctl/fractal` module and then call the .create() method on it. In one line that looks like this:

```js
const fractal = require('@frctl/fractal').create();
```

You can then call API methods on this fractal instance (or on the objects it exposes) like so:

```js
// set the project title
fractal.set('project.title', 'My New Project');

fractal.load().then(() => {

    // render a component with a custom set of context data
    fractal.components.render('@button', {
        text: 'Click here',
        style: 'primary-action'
    }).then(html => {
        console.log(html);
    });

});

```

See the individual API documentation pages for full details of available properties and methods.
