import * as fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)

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

  
  const filename = "docs/dewitsoftware-"+lang+".pdf";
  fs.writeFile(filename, buffer, (err) => {
    if (err) throw err;
    console.log("The file " +filename+ " has been saved!");

    const data = {
      Title: 'de Wit Software - Resume - ' + lang,
      Author: 'Name: Niek de Wit - Mail (preferred method of communication): niek@dewitsoftware.nl - Phone/Whatsapp: +31610566371',
      'Subject+': 'A versatile professional full-stack web developer with a strong passion for embedded software, hardware design, and innovative projects, committed to delivering effective technical solutions through expertise in web development and hands-on experience across multiple platforms.',
      'Keywords+': [
        'AWS',
        'Accessibility (WCAG)',
        'Agile/Scrum',
        'Angular V2+',
        'ArgoCD',
        'Asynchronous Programming',
        'CI/CD (Continuous Integration/Continuous Deployment)',
        'CSS',
        'Cloudflare',
        'Code Reviews',
        'Cross-Browser Compatibility',
        'Docker',
        'Dynamic web maps',
        'Expo',
        'Express.js',
        'GCP',
        'Git (Version control)',
        'GitOps',
        'Github Actions',
        'GraphQL',
        'HTML',
        'HUGO',
        'Jasmine',
        'JavaScript',
        'Karma',
        'Kubernetes',
        'Microservices',
        'MySQL',
        'NPM',
        'NestJS',
        'NoSQL',
        'Node.js',
        'Performance Optimization',
        'Postgres',
        'RESTful APIs',
        'RXJS/NGXS/NgRx',
        'React Native',
        'Responsive design',
        'SASS',
        'SEO Best Practices',
        'Stripe',
        'TypeORM',
        'Typescript',
        'UX/UI Best Practices',
        'Unit Testing',
        'Unity',
        'Web Security',
        'JSON',
        'XML',
        'TDD (Test-Driven Development)',
        'Automation',
        'Cloud Computing',
        'Serverless',
        'Containerization',
        'API Development',
        'Frontend Development',
        'Backend Development',
        'Wireframing',
        'Java',
        'C#',
        'API Integration',
        'Software Architecture',
        'Security/Encryption',
        'Networking (TCP/IP, DNS)',
        'SaaS (Software as a Service)',
        'PaaS (Platform as a Service)',
        'IaaS (Infrastructure as a Service)',
        'Infrastructure as Code (IaC)',
        'Analytics',
      ],
      Creator: 'dewitsoftware.nl',
      Producer: 'de Wit Software Portfolio Generator',
      Language: lang
    }

    ep
      .open()
      // read and write metadata operations
      .then(() => ep.writeMetadata(filename, data, ['overwrite_original']))
      .then(() => ep.readMetadata(filename, ['-File:all']))
      .then((res: any) => {
          console.log(JSON.stringify(res))
      })
      .then(() => ep.close())
      .then(() => console.log('Closed exiftool'))
      .catch(console.error)
  });

}

generate('en');
generate('nl');