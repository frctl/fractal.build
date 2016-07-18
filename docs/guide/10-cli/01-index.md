---
title: Fractal CLI tool
---

The Fractal CLI tool is an optional, globally-installed NPM package that provides some useful commands for working with Fractal projects.

## Installation & setup

The Fractal CLI tool can be installed globally via NPM:

```plain
npm i -g @frctl/fractal{{ _config.project.tag }}
```

To use the CLI tool with your Fractal project, you must first make sure you have a  {{ link('@project-settings', 'project settings file') }} (typically called `fractal.js`) in the root of your project directory. This file should export a configured Fractal instance. For example:

```javascript
// fractal.js

var fractal = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library');
fractal.components.set('path', __dirname + '/src/components');

module.exports = fractal; // export the configured Fractal instance for use by the CLI tool.
```

## Running commands

Commands are run from the command line, and typically take the format:

```plain
fractal <command-name> [args] [opts]
```

For example, to start the web UI dev server using the BrowserSync option, you can use the command:

```plain
fractal start --sync
```

When running commands in this format, the command will run and then immediately exit (unless it is watching or running a server in the background).

<div class="Note Note--standout">
    <p>Fractal also provides a more immersive {{ link('@interactive', 'interactive mode') }} that makes running multiple commands easier and faster.</p>
</div>

## Command types

The Fractal CLI supports two different types of command - _global_ and _project-level_ commands.

### Global commands

Global commands can be run from anywhere *outside of a project folder*. An example of a global command is the `fractal new <project-name>` command which helps you quickly create a new Fractal project file structure.

### Project commands

Project-level commands must be run from within the root directory of your project, and require the presence of a {{ link('@project-settings', 'project settings file') }} in the root of the project directory.

An example of a project-level command would be the `fractal start` command that starts up the {{ link('@server', 'dev server') }} for the web UI.





<!--

* Need to restart CLI on changes to project config file.

-->
