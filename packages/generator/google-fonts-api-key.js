module.exports = () => {
  const apiKey = process.env.GOOGLE_FONTS_API_KEY || "AIzaSyBUMxoCg648ZL8ukJk9OedoVNnCL8KENig";

  if (!apiKey) {
    const err = `
You need to get an Google Fonts API Key to call the API. You can get one here:
https://developers.google.com/fonts/docs/developer_api

Set the env var GOOGLE_FONTS_API_KEY to the value of your API key and retry.
  
`;
    console.error(err);
    throw new Error(err);
  }
  return apiKey;
};
