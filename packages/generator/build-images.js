#!/usr/bin/env node

let generator = require('./generator');

if (require.main === module) {
  (async () => {
    let fontDirectory = await generator.getDirectory();
    generator.generateImagesForFonts(fontDirectory);
  })();
}
