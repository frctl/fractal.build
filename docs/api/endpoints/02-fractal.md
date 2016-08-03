---
label: fractal
title: fractal
---

The following properties and methods are available directly on any Fractal instance. You can get a new instance via the `.create()` convenience method when requiring the Fractal module, like so:

```js
const fractal = require('@frctl/fractal').create();
```

## Methods

### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the {{ link('@project-settings', 'project settings') }} documentation for details of available options.

```js
fractal.set('project.title', 'My Component Library');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the [project settings](/docs/project-settings.md) documentation.

```js
console.log(fractal.get('components.statuses.prototype.color'));
// -> 'pink'
```

### .on()

### .load()

### .watch()

### .unwatch()

## Properties

### .components

### .docs

### .web

### .cli

### .version

## Events
