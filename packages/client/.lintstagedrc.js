/**
 * @file Defines the lint-staged configuration.
 */

module.exports = {
  "*.{js,ts,tsx}": ["eslint --fix"],
};
