import ejs from 'ejs';
import fs from 'fs';

export async function createFileFromTemplate(outputPath: string, templatePath: string, data: any) {
  const content: string = await ejs.renderFile(templatePath, data);
  await fs.promises.writeFile(outputPath, content, 'utf8');
}
