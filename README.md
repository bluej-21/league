# league

##Coding Style


###General
As per the editor config, our (soft) tab size will be 
* two spaces for *.{js, css, json} files
* four spaces for *.html files

For javascript, we will adopt the [nodejs styleguide](https://github.com/felixge/node-style-guide)

###Html
For html, we will adopt the following [styleguide](http://codeguide.co/#html-syntax), but adopting 4 space tabs.
If a section gets very complicated, document as follows

```html
<div class="parent">
    ...
    <div class="child">
      ...
      <div class="childsChild">
       ...
      </div> <!-- end childsChild -->
    </div> <!-- end child -->
</div> <!-- end parent -->
```
You can set this up as a snippet in your text editor, where
`divc.` (or whatever you prefer) expands to
```html
<div class="$1">
    $1
</div> <!-- end $1 -->
```

###SASS

We will adopt the naming convention shown [here](http://sass-lang.com/styleguide/color/), where
for colors as an example, colors are defined by name (maybe using [this](http://chir.ag/projects/name-that-color/#6195ED))
and then specified in the following way: `$color-(usage)-(description)`. Generally, we will be using `$(type)-(usage)-(description)`.




##SASS Style

###Colors
* Blue: #64DFFF
* Green: #9AFB6B

the sass:
```sass

```

###Font
* Header: font 1
* Body: font2

the sass:
```sass
```

