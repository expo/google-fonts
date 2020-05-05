#!/usr/bin/env node

let generator = require('./generator');

if (require.main === module) {
  (async () => {
    let fontDirectory = await generator._getDirectory();
    generator.generateImagesForFonts(fontDirectory);
  })();
}
