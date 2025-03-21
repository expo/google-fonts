#!/usr/bin/env node

const generator = require('./generator');

if (require.main === module) {
  (async () => {
    const fontDirectory = await generator.getDirectory();
    generator.generateImagesForFonts(fontDirectory);
  })();
}
