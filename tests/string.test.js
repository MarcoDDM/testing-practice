const stringLength = require('../string');

describe('stringLength', () => {
  test('Should return the length of a valid string', () => {
  expect(stringLength('Hello')).toBe(4);
});

test('Should throw an error if the string has no characters', () => {
    expect(() => {
    stringLength('');
  }).toThrow('The string must have between 1 and 10 characters');
});

test('Should throw an error if the string has more than 10 characters', () => {
   expect(() => {
   stringLength('Hello world!');
  }).toThrow('The string must have between 1 and 10 characters');
});
});



