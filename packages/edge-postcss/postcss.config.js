/* eslint-disable quote-props */

module.exports = (ctx) => ({
  "plugins": {
    "postcss-smart-import": {},
    "postcss-simple-url": {},
    "postcss-assets": {},

    // Discard comments in your CSS files with PostCSS.
    // https://github.com/ben-eb/postcss-discard-comments
    // Remove all comments... we don't need them further down the line
    // which improves performance (reduces number of AST nodes)
    "postcss-discard-comments": {
      "removeAll": true
    },

    // Automagical responsive typography. Adds a responsive property to font-size,
    // line-height and letter-spacing that generates complex calc and vw based font sizes.
    // https://github.com/seaneking/postcss-responsive-type
    "postcss-responsive-type": {},

    // Sass-like mixins
    // Needs to be executed before any variable handling plugins
    // https://github.com/andyjansson/postcss-sassy-mixins
    "postcss-sassy-mixins": {},

    // PostCSS plugin for Sass-like variables, conditionals, and iteratives
    // Supports local variables + @for/@each inspired by Sass
    // https://github.com/jonathantneal/postcss-advanced-variables
    "postcss-advanced-variables": {
      "variables": {}
    },

    // PostCSS plugin to reference any ancestor selector in nested CSS.
    // https://github.com/toomuchdesign/postcss-nested-ancestors
    "postcss-nested-ancestors": {},

    // Unwrap nested rules like how Sass does it.
    // https://github.com/postcss/postcss-nested
    "postcss-nested": {},

    // Fractional grid system built with calc(). Supports masonry, vertical, and waffle grids.
    // https://github.com/peterramsing/lost
    "lost": {},

    // A PostCSS plugin to keep CSS grids stupidly simple
    // See also: https://github.com/sylvainpolletvillard/postcss-grid-kiss
    "postcss-grid-kiss": {
      "fallback": true,
      "screwIE": true
    },

    // Adds @keyframes from Magic Animations
    // https://github.com/nucliweb/postcss-magic-animations
    "postcss-magic-animations": {},

    // Insert 3D hack before will-change property
    // https://github.com/postcss/postcss-will-change
    "postcss-will-change": {},

    // Reduce calc()
    // Note: Important to keep this after mixin/variable processing
    // https://github.com/postcss/postcss-calc
    "postcss-calc": {},

    // Replace easing names from http://easings.net to `cubic-bezier()`.
    // https://github.com/postcss/postcss-easings
    "postcss-easings": {},

    // Adds shorthand hex methods to rbga() values.
    // https://github.com/seaneking/postcss-hexrgba
    "postcss-hexrgba": {},

    // Adds fix and fix-legacy attributes to the clear property, for self-clearing of children.
    // https://github.com/seaneking/postcss-clearfix
    "postcss-clearfix": {},

    // Transform W3C CSS color function to more compatible CSS
    // https://github.com/postcss/postcss-color-function
    "postcss-color-function": {},

    // Transform RGBA hexadecimal notations (#RRGGBBAA or #RGBA) to more compatible CSS (rgba())
    // https://github.com/postcss/postcss-color-hex-alpha
    "postcss-color-hex-alpha": {},

    // Fix up CSS gradients with transparency for older browsers
    // https://github.com/gilmoreorless/postcss-gradient-transparency-fix
    "postcss-gradient-transparency-fix": {},

    // Tries to fix all of flexbug's issues
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    "postcss-flexbugs-fixes": {},

    // Writing simple and graceful Media Queries!
    // Support for CSS Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#mq-range-context
    // https://github.com/postcss/postcss-media-minmax
    "postcss-media-minmax": {},

    // Custom Media Queries
    // https://github.com/postcss/postcss-custom-media
    "postcss-custom-media": {},

    // Adds new pseudo-elements to inputs for easy cross-browser styling of their inner elements.
    // https://github.com/seaneking/postcss-input-style
    "postcss-input-style": {},

    // Fallback for Webkit Filters property to SVG filters. Amazing stuff.
    // It converts all 10 CSS shorthand filters:
    // grayscale, sepia, saturate, hue-rotate, invert, opacity, brightness, contrast, blur, drop-shadow
    // https://github.com/iamvdo/pleeease-filters
    "pleeease-filters": {},

    // Use shorthand transform properties in CSS
    // https://github.com/jonathantneal/postcss-transform-shortcut
    "postcss-transform-shortcut": {},

    // Transform :matches() W3C CSS pseudo class to more compatible CSS (simpler selectors)
    // https://github.com/postcss/postcss-selector-matches
    "postcss-selector-matches": {},

    // Add single and double colon peudo selectors
    // Normalizes e.g. `::before` to `:before` for wider browser support
    // https://github.com/axa-ch/postcss-pseudoelements
    "postcss-pseudoelements": {},

    // An easier way to write unicode-range descriptors.
    // https://github.com/ben-eb/postcss-unicode-characters
    "postcss-unicode-characters": {},

    // Transform W3C CSS "font-family: system-ui" to a practical font-family list
    // https://github.com/JLHwung/postcss-font-family-system-ui
    // See also: https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f
    "postcss-font-family-system-ui": {},

    // Reduce z-index values with PostCSS.
    // https://github.com/ben-eb/postcss-zindex
    "postcss-zindex": {},

    // Sass like @warn for PostCSS. Disabling internal usage of "postcss-reporter".
    // https://github.com/ben-eb/postcss-at-warn
    "postcss-at-warn": {
      "silent": true
    },

    // Parse CSS and add vendor prefixes to rules by Can I Use
    // https://github.com/postcss/autoprefixer
    "autoprefixer": {},

    // Adding the best CSS compressor to the chain
    // https://github.com/lahmatiy/postcss-csso
    "postcss-csso": {},

    // Log PostCSS messages to the console
    // https://github.com/postcss/postcss-reporter
    "postcss-reporter": {
      "clearReportedMessages": true
    }
  }
})