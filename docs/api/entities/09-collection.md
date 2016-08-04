
Collection objects provide a set of utility methods for working with groups of items, such as components or documentation pages.


<div class="Note Note--callout">
<p>It's important to note that Collection objects are _immutable_ - when you call a filter method or similar you get back a new Collection object, leaving the original object intact.</p>
</div>

The documentation below assumes that you already have a reference to a collection object, such as the component source object:

```
const collection = fractal.components;
```

## Methods

### .toJSON()

* `adapter` - *Adapter | String*

Returns a simplified, 'template engine friendly' object representation of the collection.

```js
collection.toJSON();
```
