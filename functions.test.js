const { stringLength, reverseString } = require('./functions.js');
describe('String Length', () => {
  it('should return the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  it('should reverse a string correctly', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
});
