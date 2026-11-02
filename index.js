const { copyFileSync } = require('node:fs');

copyFileSync('main.mustache', 'README.md');
