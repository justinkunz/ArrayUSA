const { ERROR_MESSAGES } = require('../../constants');

module.exports = function (cb) {
  function convert(arr) {
    return arr.reduce((a, c) => {
      a[c.key] = c.value;
      return a;
    }, {});
  }

  function doesQualify(arr) {
    return arr.every(
      (item) =>
        typeof item === 'object' && item.hasOwnProperty('key') && item.hasOwnProperty('value')
    );
  }

  if (!cb) {
    if (!doesQualify(this)) throw new Error(ERROR_MESSAGES.TO_OBJECT.NO_CALLBACK_INVALID_SHAPE);
    return convert(this);
  }

  const cbResponse = this.map(cb);
  if (!doesQualify(cbResponse)) {
    throw new Error(ERROR_MESSAGES.TO_OBJECT.INVALID_CALLBACK_RETURN);
  }
  return convert(cbResponse);
};
