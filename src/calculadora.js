const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("No podemos dividir entre cero");
  } else {
    return a / b;
  }
};
module.exports = { suma, resta, multiplica, divide };
