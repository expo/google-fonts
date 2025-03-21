#!/usr/bin/env node

const generator = require('./generator');
const directoryData = require('./directory-data.json');

if (require.main === module) {
  (async () => {
    await generator.generateRootReadme(directoryData);
  })();
}
