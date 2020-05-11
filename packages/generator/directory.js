let fetch = require('cross-fetch');

let googleFontsApiKey = require('./google-fonts-api-key');

let filename = path.join(__dirname, 'fontDirectory.json.cache')

async function fetchDirectory() {
  let url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&prettyPrint=false`;
  let response = await fetch(url);
  let val = await response.json();
  return val;
}

module.exports = {
  fetchDirectory,
};
