/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 22.03.17
 */

const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-cssnext')({}),
    require('postcss-font-magician')({
      variants: {
        'Khula': {
          '300': [],
          '400': [],
          '700': [],
        },
      },
      foundries: ['google'],
    }),
  ],
};
