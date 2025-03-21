const fs = require('fs');

const googleFontsApiKey = require('./google-fonts-api-key');

if (require.main === module) {
  (async () => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false&sort=date`;
    const response = await fetch(url);
    const data = await response.json();
    await fs.promises.writeFile('directory-data.json', JSON.stringify(data, null, 2));
    console.log('directory-data.json updated');
  })();
}
