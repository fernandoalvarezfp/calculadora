const { suma, resta, divide, multiplica } = require("../src/calculadora.js");
describe('Calculadora', () => {
    test('suma dos números: ¿2 + 3 = 5?', () => {
      expect(suma(2, 3)).toBe(5);
    });
  
    test('resta dos números: ¿7 - 4 = 3?', () => {
      expect(resta(7, 4)).toBe(3);
    });
  
    test('multiplica dos números: ¿3 * 4 = 12?', () => {
      expect(multiplica(3, 4)).toBe(12);
    });
  
    test('lanza un error cuando dividimos entre cero', () => {
      expect(() => divide(4, 0)).toThrow('No podemos dividir entre cero');
    });
  });