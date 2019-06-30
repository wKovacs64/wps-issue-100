const { NODE_ENV } = process.env;
const test = NODE_ENV === 'test';

module.exports = {
  plugins: ['react-hot-loader/babel'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in us', 'ie 11', 'chrome 60', 'firefox esr'],
        },
        modules: test ? 'commonjs' : false,
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
};
