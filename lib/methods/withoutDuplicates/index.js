const ArrayUSA = require('../../ArrayUSA');

module.exports = function () {
  return new ArrayUSA(...Array.from(new Set(this)));
};
