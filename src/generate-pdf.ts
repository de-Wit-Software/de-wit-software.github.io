import * as fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const generate = async function(lang: 'en' | 'nl') {
  let content = fs.readFileSync(
      path.resolve(__dirname, '../docs/' + lang + '/resume.html'),
      'utf-8'
  )
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  const imageBase64 = await new Promise<string>((res) => {
    fs.readFile(
      path.resolve(__dirname, '../docs/profile.webp'),
      (err, data) => {
        const base64Image = data.toString('base64');
        const base64ImageStr = `data:image/webp;base64,${base64Image}`;
        res(base64ImageStr);
      }
    )
  })
  const cssDir = path.resolve(__dirname, '../docs/_next/static/css');
  const cssFile = cssDir + '/' + fs.readdirSync(cssDir)[0];
  page.addStyleTag({path: cssFile});

  content = content.replace('/profile.webp', imageBase64);

  await page.setContent(content)

  const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '40px',
        bottom: '0px'
      }
  })

  await browser.close()

  fs.writeFile("docs/dewitsoftware-"+lang+".pdf", buffer, (err) => {
    if (err) throw err;
    console.log("The file " +lang+ " has been saved!");
  });

}

generate('en');
generate('nl');