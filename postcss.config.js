const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({ preset: 'default' });

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : [])
  ]
};
