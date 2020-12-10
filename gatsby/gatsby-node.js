/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// ESM require tells node we're using an esm version instead of this one
require = require('esm')(module);
// normal export so node knows what your main file is
module.exports = require('./gatsby-node.esm.js');
