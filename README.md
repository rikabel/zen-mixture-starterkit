# zen mixture starterkit

Hi! This is a [mixture.io](http://mixture.io) "boilerplate" (starterkit) for building prototype static HTML websites prior to their later implementation as a full [Drupal](http://drupal.org)-powered site using a [Zen](http://drupal.org/project/zen) sub-theme. 

As a result, the directory and file structure (particularly of the SASS/CSS files) mirrors that of the Zen theme, in order that we can more easily port the code from the static site to the Drupal site.

## Starterkit directory structure

* styles.scss (the main style file which imports all others - custom styles in here please)
   * _init.scss (support for IE versions, font sizes, font stacks, branding colour variables etc)
     * _zen.scss
       * /zen/_grids.scss (mixins for zen grids system)
     * _mixins.scss (custom mixins for your project)
   * _normalise.scss (normalisation)
   * _animate.scss (Sass animation mixins)
       * - various animation includes...
   * /layouts/_responsive.scss (media queries for page regions)
   * /components/_misc.scss (mostly Zen-theme related stuff but there are styles here for header, navigation which might not be obvious)



## Starterkit technologies included


### Sass, Compass and Zen Grids
The starterkit uses Sass, Compass and [Zen Grids](http://zengrids.com) - as does the Zen theme. 


### Animate.scss
We have also integrated [animate.scss](http://geoffgraham.me/animate-scss/) for Sass animations and transitions.

### Modernizr

[Modernizr](http://modernizr.com) is used for feature detection.


### Respond.js
[respond.js](https://github.com/scottjehl/Respond) to implement media query support for IE8 and below.


### Responsive nav

[Responsive nav](http://responsive-nav.com/) is nice simple plugin, just for prototyping

## Templates

At the moment, there is a full-width template, a sidebar left template, sidebar right template, and two sidebars template. These base templates may be added to over time if we find we regularly use other patterns.


## Other goodies
The starterkit also includes our front-end style guide, coding best practices and workflow on the home page, and a web style guide with commonly used HTML elements so you can see what you might have missed in your custom theme CSS.

Enjoy!



