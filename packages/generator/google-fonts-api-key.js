let fs = require('fs');
let path = require('path');

let apiKey =
  process.env.GOOGLE_API_KEY ||
  fs
    .readFileSync(
      path.join(process.env.HOME, 'Dropbox', 'Startup', 'google-fonts-api-key.txt'),
      'utf8'
    )
    .trim();

module.exports = apiKey;
