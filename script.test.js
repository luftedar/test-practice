const {stringLength,reverseString,calculator,capitalize} = require('./script');

test('length of string', () => {
  const value = 'string';
  expect(stringLength(value)).toBe(value.length);
  expect(stringLength(value)).toBeGreaterThan(1);
  expect(stringLength(value)).toBeLessThanOrEqual(10);
  
})

test('reverse', () => {
  const value2 = 'string2';
  expect(reverseString(value2)).not.toBe(value2);
});

describe('calculator', () => {
  test('sum', () => {
    expect(calculator.add(1,2)).toBe(3);
  });

  test('substract', () => {
    expect(calculator.substract(2,1)).toBe(1);
  });

  test('divide', () => {
    expect(calculator.divide(10,2)).toBe(5);
  });

  test('multiply', () => {
    expect(calculator.multiply(5,5)).toBe(25);
  });
})

test('capitalize', () => {
  const value = 'string';
  expect(capitalize(value[0])).toBe(value[0].toUpperCase());
})