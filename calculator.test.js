const { Calculator } = require('./calculator.js');
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should correctly add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 7)).toBe(6);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(10, -2)).toBe(12);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should correctly divide two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Divisor cannot be zero');
    });
  });

  describe('multiply', () => {
    it('should correctly multiply two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-4, 5)).toBe(-20);
      expect(calculator.multiply(0, 10)).toBe(0);
    });
  });
});