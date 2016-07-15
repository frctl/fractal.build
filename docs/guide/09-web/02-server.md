---
label: Development server
title: Development server
---

Fractal comes with a local development server for running the web UI while you are building your component library.

## Starting the server

You can either start the server using the Fractal CLI tool (if you are using it), or you can start it programmatically using Fractal's API.

### Using the CLI tool

You can use the `start` command from within the root of your project to get the server up and running:

```plain
fractal start --watch
```

The (optional) `--watch` flag here tells Fractal to watch the filesystem for changes and to rebuild the data structure as you make updates to your pages and components. For an alternative, more advanced 'watcher' see the [BrowserSync integration](#browsersync-integration) section below.

### Programmatically

If you wish to start the server programmatically, (often useful for {{ link('@build-tools', 'build tool') }} integrations), you can create a new server instance using the {{ link('@api-web#server', '`fractal.web.server()`') }} method and then start and stop it as required:

```js
const server = fractal.web.server();

server.start().then(function(){
    console.log(`Fractal server is now running at ${server.url}`);
});

server.stop();
```

The {{ link('@api-server', '`Server`') }} object returned by the call to `fractal.web.server()` is a Node EventEmitter and will emit error events (and others) that you can bind to. See the {{ link('@api-web', '`fractal.web`') }} API docs for full details.

## BrowserSync integration

The Fractal web server includes a seamless integration with BrowserSync, should you require it.

When enabled, it provides:

* Auto-reloading of the web UI when files change
* Re-injecting of static assets (such as stylesheets) when changes are made
* A network-accessible URL for device testing
* Syncing of page navigation between tabs
* Lots more - see the [BrowserSync website](https://www.browsersync.io/) for details.

BrowserSync can be enabled as a global option, when starting the server via the CLI tool or programmatically:

### Enabling globally

You can {{ link('@project-settings', 'configure') }} your Fractal instance to use BrowserSync integration whenever the server is started as follows:

```js
fractal.web.set('server.sync', true);
```

You can also pass [options](https://www.browsersync.io/docs/options) to the underlying BrowserSync instance using the `server.syncOptions` property:

```js
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome', 'firefox'],
    notify: true
});
```

### Using the CLI tool

You can use the `--sync` option to enable BrowserSync when starting the server:

```plain
fractal start --sync
```

### Programmatically

You can set the `sync` option to `true` in the server config object when getting a new server instance:

```js
const server = fractal.web.server({
    sync: true
});

server.start().then(function(){
    console.log(`Local URL: ${server.url}`);
    console.log(`Network URL: ${server.urls.sync.external}`);
});
```
