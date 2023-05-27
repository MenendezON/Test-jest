const { capitalize } = require('./capitalize.js');
describe('capitalize', () => {
    it('should capitalize the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  });