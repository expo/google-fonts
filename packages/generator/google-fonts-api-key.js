const fs = require('fs');
const path = require('path');

const apiKey =
  process.env.GOOGLE_FONTS_API_KEY ||
  fs
    .readFileSync(
      path.join(process.env.HOME, 'Dropbox', 'Startup', 'google-fonts-api-key.txt'),
      'utf8'
    )
    .trim();

if (!apiKey) {
  const err = `
You need to get an Google Fonts API Key to call the API. You can get one here:
https://developers.google.com/fonts/docs/developer_api

Set the env var GOOGLE_FONTS_API_KEY to the value of your API key and retry.
  
`;
  console.error(err);
  throw new Error(err);
}

module.exports = apiKey;
