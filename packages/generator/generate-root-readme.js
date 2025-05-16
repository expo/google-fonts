#!/usr/bin/env node

const directoryData = require('./data/directory-data.json');
const generator = require('./generator');

if (require.main === module) {
  (async () => {
    await generator.generateRootReadme(directoryData);
  })();
}
