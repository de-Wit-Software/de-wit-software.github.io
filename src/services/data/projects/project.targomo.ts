import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";

const DESCRIPTION_EN = `I had my graduation internship during my first half year at Targomo. During this internship, I researched, and set up online documentation for the API's provided by the company.  
After my internship at this company, I was hired to continue updating and maintaining the API documentation website build with HUGO static site generation.  
I also did maintenance work on the Account Management App for Targomo API users. More specifically, implementing a custom front-end (Angular) and backend (Node.js/Express) services that are necessary for managing SCA-compliant recurring payments with the Stripe payment processor.  
Finally, I developed and maintained two separate customized client applications (Angular). For these projects I was the lead developer, working closely with the product owners and clients in order to specify technical requirements and functional requirements.`;

const DESCRIPTION_NL = `Ik had mijn afstudeerstage tijdens mijn eerste halfjaar bij Targomo. Tijdens deze stage heb ik onderzoek gedaan en online documentatie opgezet voor de API's die door het bedrijf worden aangeboden.  
Na mijn afstudeerstage ben ik in dienst gegaan voor het onderhouden en updaten van de API-documentatie website, gebouwd met HUGO static site generation.  
Daarnaast heb ik onderhoudswerkzaamheden verricht aan de Account Management App voor Targomo API-gebruikers. Meer specifiek, het implementeren van een op maat gemaakte front-end (Angular) en back-end (Node.js/Express) services die nodig zijn voor het beheren van SCA-compliant automatische betalingen met de Stripe payment processor.  
Ten slotte heb ik twee andere klantenapplicaties (Angular) ontwikkeld en onderhouden. Voor deze projecten was ik de lead developer, en werkte ik nauw samen met de product owners en klanten om technische en functionele eisen vast te stellen.`;

const SHORT_DESCRIPTION_EN = `During my graduation internship at Targomo, I researched and set up online documentation for the company's APIs. After the internship, I was hired to maintain and update the API documentation website (HUGO). Additionally, I implemented and maintained a custom front-end (Angular) and backend (Node.js/Express) for managing SCA-compliant payments with Stripe and led the development of two custom web-applications.`;
const SHORT_DESCRIPTION_NL = `Tijdens mijn afstudeerstage bij Targomo heb ik onderzoek gedaan en online documentatie opgezet voor de API's van het bedrijf. Na mijn stage werd ik aangenomen om de API-documentatiewebsite (HUGO) te onderhouden en updaten. Daarnaast implementeerde en beheerde ik een op maat gemaakte front-end (Angular) en back-end (Node.js/Express) voor het beheren van SCA-conforme betalingen met Stripe en leidde ik de ontwikkeling van twee op maat gemaakte web-applicaties.`;


export function Targomo(language: 'en' | 'nl'): Project {
  return {
    company: 'Targomo',
    function: 'Web Developer',
    start: new Date('2018-02-01T00:00:00.000Z'),
    end: new Date('2019-11-30T00:00:00.000Z'),
    type: 'work',
    commitment: 'full_time',
    location: language === 'en' ? 'Berlin' : 'Berlijn',
    remote: true,
    skills: [
      Skill.ANGULAR, Skill.RXJS, Skill.NODE, Skill.EXPRESS, Skill.TS, Skill.JS, Skill.STRIPE, Skill.MAPPING, Skill.HUGO 
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? SHORT_DESCRIPTION_EN : SHORT_DESCRIPTION_NL,
    recommendations: [
      {
        description: language === 'en' ? `Copy available on request` : `Kopie beschikbaar op verzoek`,
        type: 'letter',
        name: 'Henning Hollburg',
        position: language === 'en' ? 'CEO at Targomo' : 'CEO van Targomo',
        date: new Date('2019-11-30T00:00:00.000Z'),
      },
      {
        description: `_“I've had the pleasure of working with Niek as the Product Manager of his software development work at Targomo. He has been responsible for developing several customer solutions for different use cases within the retail and public sector industry. In all projects, Niek showed strong ownership, critical-thinking and creativity. He is very self-motivated, hardworking and fun to work with. Niek is a valuable contributor you want to have on your team.”_`,
        type: 'linkedin',
        name: 'Lilian Renee Günzel',
        position: language === 'en' ? 'Worked on the same team' : 'Samengewerkt in hetzelfde team',
        url: 'https://www.linkedin.com/in/niekdewit/details/recommendations/',
        date: new Date('2019-11-22T00:00:00.000Z'),
      },
    ]
  }
}