#!/usr/bin/env node

let generator = require('./generator');

if (require.main === module) {
  (async () => {
    generator.main({ images: false });
  })();
}
