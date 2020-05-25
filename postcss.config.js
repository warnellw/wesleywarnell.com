const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.js'],
  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
});

const cssnano = require('cssnano')({ preset: 'default' });

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
};
