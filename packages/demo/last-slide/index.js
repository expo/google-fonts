let fs = require('fs');
let path = require('path');

let FontImagesDir = path.join(__dirname, '..', '..', '..', 'font-images');

async function main() {
  let imageFilenames = await getImageFilenames();
  imageFilenames = imageFilenames.filter((x) => !/(JP)|(KR)|(TC)|(Kdam)|(phum)|(antu)/.test(x));

  let randomImageFile = () => {
    let filename = imageFilenames[Math.floor(Math.random() * imageFilenames.length)];
    return FontImagesDir + '/' + filename;
  };

  let cols = 15;
  let rows = 25;
  let height = 40;
  let width = 120;

  let html = `
  <table>
  `;

  for (let row = 0; row < rows; row++) {
    html += `<tr>`;
    for (let col = 0; col < cols; col++) {
      html += `<td style='height: ${height}px; width: ${width}px;'>`;
      html += `<img src='${randomImageFile()}' style='width: ${width}px;' />`;
      html += `</td>`;
    }
    html += `</tr>`;
  }

  html += `</table>`;

  await fs.promises.writeFile('slide.html', html, 'utf8');
}

async function getImageFilenames() {
  return await fs.promises.readdir(FontImagesDir);
}

if (require.main === module) {
  main();
}
