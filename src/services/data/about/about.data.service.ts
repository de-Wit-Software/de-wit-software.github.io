const ABOUT_ME_EN = `**I am a pragmatic, solution-oriented, full-stack web developer.**  
~~CTA~~
I view software, frameworks, libraries, and packages as versatile tools to solve problems. I am not confined to a specific set of technologies; instead, I utilize whatever is necessary to address your challenges, implement new features, or support existing projects.
<br/>
I love tackling complex technical problems. While web development is my primary expertise and focus, I also have a strong passion for embedded software, hardware & PCB design, CAD, 3D printing, and now my latest educational challenge; conversion/DIY electric vehicles.
<br/>
My journey with technical challenges started at a young age, creating simple video games for my Nintendo DS. Now, after <span id="time">time</span> doing software development professionally, my passion for innovation and problem-solving remains as strong as ever. As showcased in my projects section in this portfolio, I still dedicate much of my free time to intricate and technical passion projects.
<br/>
This is the passion and energy that I bring to you and your team.
<br/>
_~ Niek de Wit_`;

const ABOUT_ME_SHORT_EN = `I am a versatile full-stack web developer with a pragmatic, solution-oriented approach. While web development is my primary expertise, I also have a strong passion for embedded software, hardware design, and innovative projects like DIY electric vehicles. My extensive experience and enduring passion for tackling complex technical challenges drive my commitment to delivering effective solutions for you and your team.  
<br/>
For more details on the projects described here and other (personal) projects, [visit my website!](https://dewitsoftware.nl/)
`;

const CTA_TEXT_EN = `Check out the projects I worked on!`;

const ABOUT_ME_NL = `**Ik ben een pragmatische, oplossingsgerichte full-stack web developer.**  
~~CTA~~
Ik zie software, frameworks, libraries en packages als veelzijdige hulpmiddelen om problemen op te lossen. Ik ben niet gebonden aan een specifieke set technologieën; in plaats daarvan gebruik ik wat nodig is om uw uitdagingen aan te pakken, nieuwe functionaliteit te implementeren of bestaande projecten te ondersteunen.
<br/>
Ik hou van het aanpakken van complexe technische problemen. Web development is mijn primaire expertise en focus, echter heb ik ook een passie voor embedded software, hardware & PCB-ontwerp, CAD, 3D-printen en nu mijn meest recente leerzame uitdaging; ombouw/zelfbouw van elektrische voertuigen.
<br/>
Mijn ervaring met technische uitdagingen begon op een jonge leeftijd, toen ik simpele videogames maakte voor mijn Nintendo DS. Nu, na ik <span id="time">time</span> professioneel met softwareontwikkeling bezig ben geweest, is mijn passie voor innovatie en en het oplossen van technische problemen nog steeds even sterk. Zoals te zien is in mijn projectensectie van deze portfolio, besteed ik nog steeds veel van mijn vrije tijd aan complexe en technische passieprojecten.
<br/>
Dit is de passie en energie die ik meebreng naar jou en jouw team.
<br/>
_~ Niek de Wit_`;

const ABOUT_ME_SHORT_NL = `Ik ben een veelzijdige full-stack web developer met een pragmatische, oplossingsgerichte aanpak. Hoewel web development mijn primaire expertise is, heb ik ook een grote passie voor embedded software, hardwareontwerp en innovatieve projecten zoals zelfbouw elektrische voertuigen. Mijn uitgebreide ervaring en blijvende passie voor het oplossen van complexe technische uitdagingen drijven mijn toewijding om effectieve oplossingen te leveren voor jou en jouw team.  
<br/>
Voor meer details over de hier beschreven projecten en andere (persoonlijke) projecten, [bezoek mijn website!](https://dewitsoftware.nl/)
`;

const CTA_TEXT_NL = `Bekijk de projecten waar ik aan heb gewerkt!`;
const RESUME_TIME_EN = `over 7 years of`;
const RESUME_TIME_NL = `meer dan 7 jaar`;

export default class AboutDataService {
  public getAboutMeText(language: 'en' | 'nl') {
    return language === 'en' ? ABOUT_ME_EN : ABOUT_ME_NL;
  }

  public getShortAboutMeText(language: 'en' | 'nl') {
    return language === 'en' ? ABOUT_ME_SHORT_EN : ABOUT_ME_SHORT_NL;
  }

  public getCTAText(language: 'en' | 'nl') {
    return language === 'en' ? CTA_TEXT_EN : CTA_TEXT_NL;
  }

  public getResumeTimeText(language: 'en' | 'nl') {
    return language === 'en' ? RESUME_TIME_EN : RESUME_TIME_NL;
  }
}

