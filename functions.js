function stringLength(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  const length = string.length;

  if (length < 1 || length > 10) {
    throw new Error('String length must be between 1 and 10 characters');
  }

  return length;
}

function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  return string.split('').reverse().join('');
}
module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;