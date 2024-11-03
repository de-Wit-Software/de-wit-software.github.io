import * as fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import SkillsDataService from "./services/data/skills/skills.data.service";
import { ResumeType } from './types';
const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)
const skillsService = new SkillsDataService();
const generateResume = async function(lang: 'en' | 'nl', type: ResumeType) {
  let content = fs.readFileSync(
      path.resolve(__dirname, '../docs/' + lang + '/' + type + '.html'),
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

  
  const filename = `docs/dewitsoftware-${type}-${lang}.pdf`;
  fs.writeFile(filename, buffer, (err) => {
    if (err) throw err;
    console.log("The file " +filename+ " has been saved!");

    const data = {
      Title: 'de Wit Software - Resume - ' + lang,
      Author: 'Name: Niek de Wit - Mail (preferred method of communication): niek@dewitsoftware.nl - Phone/Whatsapp: +31610566371',
      'Subject+': 'A versatile professional full-stack web developer with a strong passion for embedded software, hardware design, and innovative projects, committed to delivering effective technical solutions through expertise in web development and hands-on experience across multiple platforms.',
      'Keywords+': [
        ...skillsService.getExpertiseSkills()[type].highlighted,
        ...skillsService.getExpertiseSkills()[type].normal,
        ...skillsService.getPersonalSkills()
      ],
      Creator: 'dewitsoftware.nl',
      Producer: 'de Wit Software - Portfolio Generator',
      Language: lang
    }

    ep
      .open()
      // read and write metadata operations
      .then(() => ep.writeMetadata(filename, data, ['overwrite_original']))
      .then(() => ep.readMetadata(filename, ['-File:all']))
      .then(() => ep.close())
      .then(() => console.log('Closed exiftool'))
      .catch(console.error)
  });

}

const generateTermsAndConditions = async function(lang: 'en' | 'nl') {
  let content = fs.readFileSync(
      path.resolve(__dirname, '../docs/' + lang + '/terms-and-conditions-pdf-render.html'),
      'utf-8'
  )
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  const cssDir = path.resolve(__dirname, '../docs/_next/static/css');
  const cssFile = cssDir + '/' + fs.readdirSync(cssDir)[0];
  page.addStyleTag({path: cssFile});

  await page.setContent(content)
  
  const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '80px',
        bottom: '80px',
        left: '80px',
        right: '80px'
      }
  })

  await browser.close()

  
  const filename = `docs/dewitsoftware-terms-and-conditions-${lang}.pdf`;
  fs.writeFile(filename, buffer, (err) => {
    if (err) throw err;
    console.log("The file " +filename+ " has been saved!");

    const data = {
      Title: 'de Wit Software - Terms and Conditions - ' + lang,
      Author: 'Name: Niek de Wit - Mail (preferred method of communication): niek@dewitsoftware.nl - Phone/Whatsapp: +31610566371',
      'Subject+': 'Terms and Conditions for dewitsoftware.nl',
      Creator: 'dewitsoftware.nl',
      Producer: 'de Wit Software - Portfolio Generator',
      Language: lang
    }

    ep
      .open()
      // read and write metadata operations
      .then(() => ep.writeMetadata(filename, data, ['overwrite_original']))
      .then(() => ep.readMetadata(filename, ['-File:all']))
      .then(() => ep.close())
      .then(() => console.log('Closed exiftool'))
      .catch(console.error)
  });

}
const timeout = setTimeout(
  () => {}, 60000
);
(async () => {
  await generateResume('en', ResumeType.WEB);
  await generateResume('en', ResumeType.MOBILE);
  await generateResume('en', ResumeType.GAME);
  await generateResume('nl', ResumeType.WEB);
  await generateResume('nl', ResumeType.MOBILE);
  await generateResume('nl', ResumeType.GAME);
  await generateTermsAndConditions('en');
  await generateTermsAndConditions('nl');
  timeout.unref();
})();