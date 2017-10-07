A Vue component to build a CSS Grid Dashboard
===
This simple package provides two components to create a simple grid to create a dashboard. This package is inspired by the awesome [dashboard project created by Spatie](https://github.com/spatie/dashboard.spatie.be).

But instead of providing a complete project this package aims to provide you some components that you can use to integrate in your own projects.

![The Dashboard](docs/dashboard.png)

Installation
---

Simply add this package using npm/yarn

```bash
# using yarn
yarn add aheenam-vue-dashboard

# using npm
npm i -S aheenam-vue-dashboard
```

Usage
---

This package includes two components: `dashboard` and `tile`. While `dashboard` serves as the container for the grid system, `tile` is the child component that should be used for the `dashboard`.

### The `dashboard` component

The dashboard component needs two parameter defining the size of the grid.

```html
<dashboard :rows="4" :columns="4">
</dashboard>
```

The `rows` property defaults to `3` and the `columns` property has 5 as its default. That means

```html
<dashboard></dashboard>
```

will create a grid with 3 rows and 5 columns.

### The `tile` component

This component is in charge of building the grids in this dashboard. Using the properties you can position and size them.

```html
<dashboard  :rows="4" :columns="4">
  <tile :x="1" :y="1" :w="4" :h="1">
    Hello World!
  </tile>
</dashboard>
```

Above example create a dashboard with 4 rows and 4 columns and adds a tile that spans over the whole first row.

`x` & `y` and the coordinates where to start the tile and `w` and `h` represent the width and height of the tile.

#### Styling

There is no styling applied to this elements. The only CSS that is used is the use of CSS Grid System. All the others styles is meant to applied by yourself by adding class and style bindings to the elements.

## Content of the tiles

What about the dashboard contents? It is up to you what you want to display in these tiles. It can be some plain text as shown in the example but also be some complex component that you or someone in the community created.

Take the [Clock component](https://github.com/Aheenam/vue-dashboard-clock) we have published. If you want to use this in one of you tile, just import it and add it into your tile:

```html
<dashboard  :rows="4" :columns="4">
  <tile :x="1" :y="1" :w="4" :h="1">
    <clock timezone="Europe/Berlin" />>
  </tile>
</dashboard>
```

Going this way makes it possible to keep this dashboard package as clean as possible. Also you can choose from almost any of the other packages out there.

Changelog
---
Check [CHANGELOG](CHANGELOG.md) for the changelog

Testing
---
To run tests use

```bash
yarn test
```
    
Contributing
---
*soon*

Security
---
If you discover any security related issues, please email rathes@aheenam.com or use the issue tracker of GitHub.

About Aheenam
---
Aheenam is a small company from NRW, Germany creating custom digital solutions. Visit 
[our website](https://aheenam.com) to find out more about us.

License
---
The MIT License (MIT). Please see [License File](https://github.com/Aheenam/laravel-translatable/blob/master/LICENSE) for more information.
