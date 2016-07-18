---
label: Mandelbrot
title: Mandelbrot
---

[Mandelbrot](https://github.com/frctl/mandelbrot) is the name of the default web UI theme that ships with Fractal. A standard installation will look something like this:

<div class="Screenshot">
{{ image('mandelbrot-demo-component.png') }}
</div>


## Customisation

Mandelbrot offers some theme-specific configuration options. To set these, you must first create a new instance of the theme and pass in the configuration values as follows:

```js
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "fuchsia"
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
```

## Configuration options

The available configuration options are detailed below:

### skin

Mandelbrot offers a pre-defined set of colour 'skins' that you can apply to the UI for quick and easy customisation.

```js
{
    "skin": "lime"
}
```

* **Choices:** {% for color in ['aqua', 'black', 'blue', 'default', 'fuchsia', 'green', 'grey', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'teal', 'white', 'yellow'] %}`'{{ color }}'`{% if not loop.last %} | {% endif %}{% endfor %}
* **Default:** `default` (blue)

### format

The format to use when outputting context data.

```js
{
    "format": "yaml"
}
```

* **Choices:** `json` | `yaml`
* **Default:** `json`

### nav

The nav sections that should show up in the sidebar (and in which order):

```js
{
    "nav": ["docs", "components"] // show docs above components in the sidebar
}
```

* **Possible values:** `docs`, `components`, `assets`
* **Default:** `["components", "docs", "assets"]`

### panels

The component info panels that should be displayed in the component browser (and in which order the tabs should be displayed):

```js
{
    "panels": ["html", "context", "info", "notes"] // don't show the view template or the resources panels
}
```

* **Possible values:** `html`, `html`, `context`, `resources`, `info`, `notes`
* **Default:** `["html", "view", "context", "resources", "info", "notes"]`

### styles

The URL of a stylesheet to apply the to the UI. If none is specified then the appropriate Mandelbrot stylesheet for the chosen `skin` value (see above) will be used instead.

```js
{
    "styles": "http://mega-corp.com/css/custom-mandelbrot-stylesheet.css"
}
```

This option can also take an **array** of stylesheets URLs to use. If you do not wish to _replace_ the default stylesheet, but instead want to add an additional stylesheet before or after it, you can use the `default` placeholder value and Mandelbrot will expand that out into the correct URL before use. For example:


```js
{
    "styles": [
        "http://mega-corp.com/css/custom-mandelbrot-stylesheet.css",
        "default",
        "/another/stylesheet.css"
    ]
}
```

In this case the default Mandelbrot stylesheet link will be output between the two other custom styleheets.

<div class="Note Note--standout">
This option **is not used** for applying styles to your _components_ - for information on how to include component stylesheets see the docs on linking to {{ link('@web#static-assets', 'static assets') }}.
</div>

### scripts

URL for the JavaScript file to use in the Mandelbrot UI. If none is specified then the default Mandelbrot JS file will be used instead.

```js
{
    "scripts": "http://mega-corp.com/js/custom-mandelbrot-scripts.js"
}
```

This option can also take an **array** of JavaScript file URLs to use. If you do not wish to _replace_ the default JS, but instead want to add a additional scripts before or after it, you can use the `default` placeholder value and Mandelbrot will expand that out into the correct URL before use. For example:


```js
{
    "scripts": [
        "http://mega-corp.com/js/custom-mandelbrot-scripts.js",
        "default",
        "/another/script.js"
    ]
}
```

In this case the default Mandelbrot script tag link will be output between the two other custom script sources.

<div class="Note Note--standout">
This option **is not used** for applying JavaScript to your _components_ - for information on how to include component JS files see the docs on linking to {{ link('@web#static-assets', 'static assets') }}.
</div>


### lang

Specify the value of the `lang` attribute that is applied to the `html` element.

```js
{
    "lang": "fr" // defaults to 'en'
}
```

### rtl

Switch the theme into RTL mode.

```js
{
    "rtl": true  // defaults to false
}
```

### static.mount

Virtual path prefix for the theme's static assets. The value of this is prepended to the generated theme static asset URLs.

```js
{
    "static": {
        "mount": "no-clash", // Theme asset URLs would now look something like: '/no-clash/path/to/file.js'
    }
}
```

* **Default:** `_theme`
