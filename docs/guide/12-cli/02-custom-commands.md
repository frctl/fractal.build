---
label: Custom commands
---

It is possible to extend the Fractal CLI tool using custom commands. These allow you to hook into the power of Fractal's API to build bespoke commands to help you with your project workflow.

Custom commands are typically registered in your {{ link('@project-settings', 'project settings file') }} using the {{ link('@api-cli#command', '`fractal.cli.command()`') }} method. Once registered they can then be called via the command line or programmatically.

## An example custom command

An simple custom command to list all the components in the project, together with their status, is shown below. This would typically be registered in your {{ link('@project-settings', 'project settings file') }}.

```js
// fractal.js

var config = {
    description: 'Lists components in the project'
};

function listComponents(args, done){
    const app = this.fractal;
    for (let item of app.components.flatten()) {
        this.log(`${item.handle} - ${item.status.label}`);
    }
    done();
};

fractal.cli.command('list-components', listComponents, config); // register the command
```

Once created, the command can be run from within the project directory using the command:

```plain
fractal list-components
```

It can also be called programmatically using the {{ link('@api-cli#exec', '`fractal.cli.exec()`') }} method:

```js
fractal.cli.exec('list-components');
```
