const { override, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Include node_modules for transpilation
  babelInclude([
    path.resolve('src'),
    // Add specific problematic packages
    path.resolve('node_modules/react-parallax-tilt')
  ])
);