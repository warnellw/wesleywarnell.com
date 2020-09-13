const cssnano = require('cssnano')({ preset: 'default' });
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
