const fs = require('fs');
const package = require('../package.json');
const [, , bumpType] = process.argv;

let [major, minor, patch] = package.version.split('.');

if (bumpType === 'major') {
  major++;
  minor = 0;
  patch = 0;
} else if (bumpType === 'minor') {
  minor++;
  patch = 0;
} else if (bumpType === 'patch') {
  patch++;
}

package.version = `${major}.${minor}.${patch}`;

fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
