---
title: Upgrade guide
label: Upgrading
---


## Upgrading from a pre-1.0 version

If you are have been using a pre-1.0 version of Fractal, you will need to update both the local Fractal version in your project dependencies **and** your Fractal CLI tool version.

### CLI tool

Update your CLI tool to the latest version:

```plain
npm i -g @frctl/fractal{{ _config.project.tag }}
```

### Per-project dependencies

Update the Fractal version in your project's `package.json` file:

```js
{
  "dependencies": {
    "@frctl/fractal": "^1.0.0"
  }
}
```

Then run `npm update` from within your project directory to install the latest 1.x version of Fractal.

### Breaking changes

Fractal v1.x contains a number of breaking changes with respect to the 0.x branch. Most of which are centered around project setup and configuration.

* **Project setup:** See the {{ link('@project-settings', 'project setup') }} documentation for details on the updated syntax for creating and configuring a new Fractal instance.
* **Template engines**: The syntax for registering and configuring template engines has changed. See the documentation for the {{ link('@views', 'default Handlebars engine') }} and the {{ link('@template-engines', 'template engine customisation') }} documentation for full details.
* **Themes**: Theme loading and configuration has had significant changes, and the default theme (Mandelbrot) has been updated accordingly. See the {{ link('@default-theme', 'Mandelbrot docs') }} and the more general {{ link('@customisation-web', 'web theme customisation') }} docs for info.
