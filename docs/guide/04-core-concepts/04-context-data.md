Context data is data that is made available to your {{ link('@configuration-files', 'view templates') }} when they are rendered.

It is typically defined within a {{ link('@configuration-files', 'configuration file') }}, although documentation pages can opt to define it in in a {{ link('@docs#yaml-front-matter', 'YAML front-matter section') }} instead if desired.

Context data can consist of simple data types such strings, booleans, numbers, arrays and objects. It can also contain Promises (which will be resolved before context data is made available for use) and special 'static data references' that allow referencing of context data from other components or documentation pages.

## Defining and using context data

To define context data for a component or documentation page you should to set a `context` object in the relevant configuration file:

```js
// my-component.config.json
{
    "context": {
        // context data goes here
    }
}
```

Any data set within this context object will then be made available to that item's {{ link('@views', 'view template') }} as variables. For example:

```js
// my-component.config.json
{
    "context": {
        "title": "User of the week",
        "user": {
            "name": "Mickey Mouse",
            "email": "mickey@mouse.com"
        }
    }
}
```
{% raw %}
```handlebars
<!-- my-component.hbs -->
<div class="panel">
    <h1>{{ title }}</h1>
    <div class="user">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
    <div>
</div>
```
{% endraw %}


  <!-- ## Data references

 ## Dynamic data -->
