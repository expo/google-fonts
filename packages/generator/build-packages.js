#!/usr/bin/env node

const generator = require('./generator');

if (require.main === module) {
  (async () => {
    generator.main({ images: false });
  })();
}
