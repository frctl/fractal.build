---
handle: collections-config
label: Config Reference
title: Collection Configuration
---

The majority of properties set in a collection configuration file apply not to the collection itself, but rather cascade down to the items within it. The exception to this is the `label` and `title` properties.

**For details on the available cascading configuration properties** that will apply to  child items, see the relevant configuration reference sections:

* {{ link('@components-config', 'Component configuration') }}
* {{ link('@docs-config', 'Docs configuration') }}

#### hidden

Whether or not the collection (and all it's children) should be hidden from listings and navigation.

```yaml
hidden: false
```

#### label

The label is typically displayed in any UI navigation items that refer to the collection. Defaults to a title-cased version of the collection directory name if not specified.

```yaml
label: 'Website Layouts'
```

An integer order value, used when sorting collections. Overrides any order value set as a property of the directory name if set.

#### order

```yaml
order: 4
```

#### title

The string that is used when a UI needs a title for the collection. Defaults to the value of `label` if not set.

```yaml
title: 'My Favourite Website Layouts'
```
