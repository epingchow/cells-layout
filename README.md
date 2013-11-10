#cells-layout
============

Simple, Fullscreen adapting css grid layout

Easy for fullscreen web application page layout with static width side panel.





## What is cells-layout?

`cells-layout` make it easier to make application pages with a static width navigation panel.

###Common page layouts:

```
Sub-Main layout

  240px        auto
┌-----┬-------------------┐
│     │                   │
│     │                   │
│ sub │       main        │
│     │                   │
│     │                   │
└-----┴-------------------┘


Main-Sub layout

         auto         240px 
┌-------------------┬-----┐
│                   │     │
│                   │     │
│       main        │ sub │
│                   │     │
│                   │     │
└-------------------┴-----┘


Sub-Main-Extra layout

  240px     auto      200px
┌-----┬-------------┬-----┐
│     │             │     │
│     │             │     │
│ sub │     main    │extra│
│     │             │     │
│     │             │     │
└-----┴-------------┴-----┘
```


###Layout with `cells-layout`:

* cell's width : `40px`
* 240px : `6 cells`
* 200px : `5 cells`

####.grid-s6-main

```
  240px        auto
┌-----┬-------------------┐
│     │                   │
│     │                   │
│ sub │       main        │
│     │                   │
│     │                   │
└-----┴-------------------┘

<div class="grid-s6-main">
    <div class="sub"></div>
    <div class="main"></div>
</div>
```

####.grid-main-s6

```
         auto         240px 
┌-------------------┬-----┐
│                   │     │
│                   │     │
│       main        │ sub │
│                   │     │
│                   │     │
└-------------------┴-----┘

<div class="grid-main-s3">
    <div class="sub"></div>
    <div class="main"></div>
</div>

```

####.grid-s6-main-e5
```

  240px        auto
┌-----┬-------------------┐
│     │                   │
│     │                   │
│ sub │       main        │
│     │                   │
│     │                   │
└-----┴-------------------┘

<div class="grid-s6-main-e5">
    <div class="sub"></div>
    <div class="extra"></div>
    <div class="main"></div>
</div>

```

####nesting
```

240px    200px     auto      
┌-----┬-----┬------------┐
│     │     │            │
│     │     │            │
│ sub │ sub │    main    │
│     │     │            │
│     │     │            │
└-----┴-----┴------------┘

<div class="grid-s6-main">
    <div class="sub"></div>
    <div class="main">
        <div class="grid-s5-main">
            <div class="sub"></div>
            <div class="main"></div>
        </div>
    </div>
</div>

```




## Customized

Modify `cells.less`,you can custom the cell's width or make your own layout standard.

### Cell's width:`@cells-width:40px;` 

### Build your cells-layout :
* Sub-Main Layout from s1 ~ s10 :`.grid-sX-main(10);`
* Main-Sub Layout from s1 ~ s10 :`.grid-main-sX(10);`
* Sub-Main-Extra Layout from s1 ~ s10 and e1 ~ e10 :`.grid-sX-main-eX(10,10);`

### Recommend : don't make too many useless layout.





## Quick start

* Clone the repo: `git clone https://github.com/epingchow/cells-layout.git`.
* Install with [Node.js](http://nodejs.org/):`npm install`
* Install [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`
* Build with [Grunt](http://gruntjs.com/):`grunt`





### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
cells-layout/
├-- css/
    ├-- cells.css
    └-- cells.min.css
```
