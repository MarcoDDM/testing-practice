const capitalize = require('../capitalize.js');

test('capitalize function capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
