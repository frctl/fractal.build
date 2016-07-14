---
label: View Templates
---

{{ link('@components', 'Components') }} and {{ link('@docs', 'documentation pages') }} both make use of **view templates**.

For components, the view template is the file that the component's markup lives in. For pages, it's the file that contains the content of the page.

View templates are, at their core, just specially named files that are rendered using a template engine. Documentation pages are then additionally (optionally) passed through a Markdown parser to generate the final output.

Using {{ link('@configuration-files', 'configuration files') }}, you can pass {{ link('@context-data', 'context data') }} into your view templates to avoid having to hard code values in them and so allow them to be re-useable in many places - including {{ link('@production', 'directly in your application') }} if desired!

## Template rendering

By default, Fractal uses [Handlebars](http://handlebarsjs.com) to render view templates for both components and documentation pages. However you are {{ link('@template-engines', 'free to use a different template engine') }} like Nunjucks (or even React!) if it suits the needs of your project better.

You can also use one template engine for your components and another different engine for your documentation pages, should you so wish.

<div class="Note Note--callout">
**It's important to understand** that the syntax, capabilities and even behaviour of your view templates will all depend on the template engine you have chosen to use. **The contents of this documentation will assume the use of the default Handlebars engine**.
</div>

## Using Handlebars

{% raw %}

[Handlebars](http://handlebarsjs.com) is the default template engine used by Fractal. Handlebars templates look like regular HTML but with some additional embedded handlebars expressions. A handlebars expression is a `{{`, some contents, followed by a `}}`

```
<div class="entry">
    <h1>{{ title }}</h1>
    <div class="body">
    {{ body }}
    </div>
</div>
```

{% endraw %}

It's worth familiarising yourself with Handlebars using it's [documentation](http://handlebarsjs.com) if you want to get the most out of Fractal.

### Handlebars helpers

On top of the standard set of [Handlebars helpers](http://handlebarsjs.com#helpers), Fractal makes a small set of additional helpers available to your component templates and documentation pages.

Using these helpers is not required in any way, although they are often helpful. If you are need to integrate your templates directly into your production site or application build you _may_ find that using them ties your templates too tightly into Fractal, in which case you might be better off {{ link('@template-engines#pristine', 'disabling them') }} or {{ link('@template-engines', 'adding your own') }}.

The available helpers are:

{% raw %}

#### `render`

The `render` helper renders a component (referenced by it's handle) using the context data provided to it. If no data is provided, it will use the context data defined within the component's configuration file, if it has one.

**This can be very useful as an alternative to using the regular partial `{{> @name }}` helper to import sub-components.** Partials do not pull in their own context so using the `render` helper instead can help prevent repetition of context data in the configuration files of components that include sub-components.

```handlebars
<!-- pass in data for rendering -->
{{render '@example' someData}}
{{render '@example--variant' otherData}}

<!-- use the config file data for rendering -->
{{render '@example'}}
{{render '@example--variant'}}
```

You can also pass in a *partial* data object (i.e. containing only some of the properties the component expects) and then set the `merge` property to true to populate the missing items from the default  context data. This allows you to override only the items you need to for this instance of the rendered component.

```handlebars
{{render '@example' partialData merge=true}}
```

#### `context`

Outputs the resolved context data for a component.

```handlebars
{{context '@example'}}
```

#### `view`

Outputs the raw view template contents for the specified component.

```handlebars
{{view '@example'}}
```

### Special variables

Fractal also makes a few special variables available to your templates. They all have names prefixed with an underscore to help prevent clashes with any context data variables that are set by the user.

The same caveats as noted about the helpers above apply to using these - they will tie your templates a little more tightly into Fractal so you may choose not to use them for that reason.

#### `_config`

Contains the full Fractal configuration object. Useful for when you want to refer to a configuration item in your documentation (or components).

```handlebars
{{ _config.project.title }} <!-- outputs the project title -->
{{ _config.components.ext }} <!-- outputs the extension used for components -->
```

#### `_self`

Contains a simple data object representation of the item (i.e. component or page) being rendered.

```handlebars
{{ _self.title }} <!-- outputs 'Button' -->
```

{% endraw %}

#### `_target`

This variable is only set in {{ link('@preview-layouts', 'component preview layouts') }}, and contains a simple data object representation of the item (i.e. component or page) being rendered _within_ the preview layout.

{% raw %}

```handlebars
{{ _target.title }} <!-- outputs 'Button' -->
```

{% endraw %}
