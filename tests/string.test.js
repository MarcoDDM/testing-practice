const stringLength = require('../string');

describe('stringLength', () => {
  test('Debería devolver la longitud de una cadena válida', () => {
    expect(stringLength('Hola')).toBe(4);
  });

  test('Debería lanzar un error si la cadena no tiene caracteres', () => {
    expect(() => {
      stringLength('');
    }).toThrow('La cadena debe tener entre 1 y 10 caracteres');
  });

  test('Debería lanzar un error si la cadena tiene más de 10 caracteres', () => {
    expect(() => {
      stringLength('Hola mundo!');
    }).toThrow('La cadena debe tener entre 1 y 10 caracteres');
  });
});
