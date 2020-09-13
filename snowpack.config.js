module.exports = {
  mount: {
    src: '/',
  },
  plugins: [
    [
      '@snowpack/plugin-build-script',
      {
        input: ['.css'],
        output: ['.css'],
        cmd: 'postcss $FILE',
      },
    ],
  ],
};
