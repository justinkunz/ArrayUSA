const { ERROR_MESSAGES, VALIDATION } = require('../../constants');

module.exports = function (type) {
  if (!VALIDATION.VALID_FILTER_TYPES.includes(type))
    throw new Error(ERROR_MESSAGES.FILTER_TYPE.INVALID_TYPE);

  switch (type) {
    case 'array':
      return this.filter((item) => Array.isArray(item));
    case 'null':
      return this.filter((item) => item === null); // Strictly compared since typeof null is object
    case 'objectOnly':
      return this.filter((item) => typeof item === 'object' && !Array.isArray(item));
    default:
      return this.filter((item) => typeof item === type);
  }
};
