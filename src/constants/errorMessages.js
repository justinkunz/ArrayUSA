const { VALID_FILTER_TYPES } = require('./validation');

const FILTER_TYPE = {
  INVALID_TYPE: (type) =>
    `Invalid type: "${type}". Allowed types: \n${VALID_FILTER_TYPES.join('\n')}`,
};

const TO_OBJECT = {
  NO_CALLBACK_INVALID_SHAPE: () =>
    'When no callback fn is passed, each array item must be an object containing a "key" and a "value" property',
  INVALID_CALLBACK_RETURN: () =>
    'Each item returned from callback fn must be an object containing a "key" and a "value" property',
};

module.exports = { FILTER_TYPE, TO_OBJECT };
