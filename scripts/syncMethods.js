const fs = require('fs');
const path = require('path');
const methods = require('../lib/methods');

const targetPath = path.join('lib', 'index.template.js');
const destPath = path.join('lib', 'index.js');

const template = fs.readFileSync(targetPath, 'utf-8');

const changed = template
  .replace(
    '// ARRAYUSA_PROTOS',
    Object.keys(methods)
      .map((method) => `ArrayFriend.prototype.${method} = methods.${method};`)
      .join('\n')
  )
  .replace(
    '// ARRAY_PROTOS',
    Object.keys(methods)
      .map((method) => `Array.prototype.${method} = methods.${method};`)
      .join('\n')
  );

fs.writeFileSync(destPath, changed);
