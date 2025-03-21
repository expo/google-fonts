#!/usr/bin/env node

const generator = require('./generator');

if (require.main === module) {
  (async () => {
    await generator.generateRootReadme();
  })();
}
