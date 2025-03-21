#!/usr/bin/env node

const generator = require('./generator');

if (require.main === module) {
  (async () => {
    const directoryData = require('./directory-data.json');
    await generator.generateRootReadme(directoryData);
  })();
}
