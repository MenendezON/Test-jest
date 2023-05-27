const { stringLength } = require('./functions');

describe('stringLength', () => {
  it('should return the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('')).toBe(0);
    expect(stringLength('1234567890')).toBe(10);
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => stringLength(123)).toThrow('Input must be a string');
    expect(() => stringLength(null)).toThrow('Input must be a string');
    expect(() => stringLength(undefined)).toThrow('Input must be a string');
    expect(() => stringLength({})).toThrow('Input must be a string');
  });

  it('should throw an error if the string length is less than 1', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
  });

  it('should throw an error if the string length is greater than 10', () => {
    expect(() => stringLength('This string is too long')).toThrow('String length must be between 1 and 10 characters');
  });
});
