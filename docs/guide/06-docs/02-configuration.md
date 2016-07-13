---
handle: pages-config
label: Config reference
title: Configuring Documentation Pages
---

Documentation pages and doc {{ link('@collections', 'collections') }} can have their own (optional) configuration files associated with them. Alternatively, documentation pages can also specify their configuration in a {{ link('@docs#yaml-front-matter', 'YAML front-matter section') }} of the page itself. See the {{ link('@docs#yaml-front-matter', 'documentation overview') }} for more information.

If you are using standalone configuration files, you should read the {{ link('@configuration-files', 'configuration file documentation') }} to learn more about how configuration files need to be named and formatted.

## Page properties

These are properties that can be specified in an individual page's YAML front matter section or in a configuration file for that page.

### context

Data to pass to the page when rendering it.

`context` is an **inheritable property**. Any context data set on the page will be *merged* with any context data set upstream in the {{ link('@configuration-files#configuration-inheritance', 'configuration cascade') }}.

```yaml
context:
  colors: ['red','pink','blue']
```

### handle

Override the generated handle. Note that this will also have the side effect of preventing any [prefixes](#prefix) set in upstream collections being applied to the handle.

```yaml
handle: my-great-page
```

### hidden

Specifies whether the page is hidden (i.e. does not show up in listings or navigation) or not. Overrides the inferred value from an underscore-prefixed file name if set.

```yaml
hidden: true
```

### label

The label is typically displayed in any UI navigation items that refer to the page. Defaults to a title-cased version of the page file name if not specified.

```yaml
label: 'Naming Conventions'
```

### order

An integer order value, used when sorting pages. Overrides any order value set as a property of the filename if set.

```yaml
order: 4
```

### title

The title of a page. Defaults to the same as the `label` if not specified.

```yaml
title: 'Amazing Mega Buttons'
```

## Collection properties

Collections can specify properties that should be applied to all child pages of that collection via {{ link('@configuration-files#configuration-inheritance', 'configuration inheritance') }}. See the {{ link('@collections', 'documentation on collections') }} for more details on how to work with collections, and for details on available non-inheritable properties like `label` and `title`.

### context

Context data to be made available to (and merged into) child pages in the collection.

```yaml
context:
  colors: ['red','pink','blue']
```

### prefix

A string to be prefixed on to the generated {{ link('@naming', 'handles') }} of all pages in that collection.

```yaml
prefix: 'api'
```
Given the prefix above, a page with the name of `logging` that lives within this collection will have the handle `@api-logging`.
