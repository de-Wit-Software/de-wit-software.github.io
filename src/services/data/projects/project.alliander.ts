import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `
At Alliander, together with a new team, I worked as a full-stack developer on an application which aids the registration and management of problems in the power grid. It was my responsibility to develop and maintain a custom front-end (Angular) and backend (Node.js/NestJS/Postgres).  

Initially, this software was deployed on an Openshift. For technical reasons related to an upcoming database migration, I took the lead in researching, planning and executing the migration of our deployment away from Openshift, to an AWS EKS cluster.  

Besides usual software feature implementations, one of the main challenges in this project, team and organisation in general, was a migration from a data architecture based on SAP HANA, to an architecture based on AWS-hosted databases. I take responsibility for technically leading the project and the team on a path forwards, away from SAP HANA, towards an architecture build around AWS.  

I worked closely with the product owner, key-users, solution architects and other developers. To find technical solutions and specific workable plans of action for the development of new features and software solutions more generally.  
`;

const DESCRIPTION_NL = `
Bij Alliander heb ik samen met een nieuw team gewerkt als full-stack ontwikkelaar, aan een applicatie die helpt bij de registratie en het beheer van problemen in het elektriciteitsnet. Het was mijn verantwoordelijkheid om een op maat gemaakte front-end (Angular) en back-end (Node.js/NestJS/Postgres) te ontwikkelen en te onderhouden.

Aanvankelijk werd deze software uitgerold op Openshift. Vanwege technische redenen gerelateerd aan een aankomende databasemigratie, nam ik het voortouw in het onderzoeken, plannen en uitvoeren van de migratie van onze deployment van Openshift naar een AWS EKS-cluster.

Naast de gebruikelijke software feature implementaties, was een van de grootste uitdagingen in dit project, het team en de organisatie in het algemeen, een migratie van een data-architectuur gebaseerd op SAP HANA naar een architectuur gebaseerd op AWS-gehoste databases. Ik nam de verantwoordelijkheid voor het technisch leiden van het project en het team op een pad vooruit, weg van SAP HANA, naar een architectuur opgebouwd rond AWS.

Ik heb nauw samengewerkt met de product owner, key-users, solution architects en andere ontwikkelaars om technische oplossingen en specifieke uitvoerbare actieplannen te vinden voor de ontwikkeling van nieuwe functionaliteiten en softwareoplossingen in het algemeen.`;

const SHORT_DESCRIPTION_EN = `At Alliander, I worked as a full-stack developer, responsible for developing and maintaining a custom front-end (Angular) and backend (Node.js/NestJS/Postgres) for an application managing power grid issues. I led the migration of our deployment from Openshift to an AWS EKS cluster and guided the transition from a SAP HANA-based data architecture to an AWS-hosted architecture, collaborating closely with stakeholders to develop technical solutions.`;

const SHORT_DESCRIPTION_NL = `Bij Alliander was ik als full-stack ontwikkelaar verantwoordelijk voor het ontwikkelen en onderhouden van een op maat gemaakte front-end (Angular) en back-end (Node.js/NestJS/Postgres) voor een applicatie die problemen in het elektriciteitsnet beheert. Ik leidde de migratie van Openshift naar een AWS EKS-cluster en begeleidde de overgang van een SAP HANA-gebaseerde data-architectuur naar een AWS-gehoste architectuur, in nauwe samenwerking met diverse stakeholders.`;



export function Alliander(language: 'en' | 'nl'): Project {
  return {
    company: 'Alliander',
    function: 'Software Engineer',
    start: new Date('2023-01-01T00:00:00.000Z'),
    end: new Date('2024-06-11T00:00:00.000Z'),
    type: 'work',
    commitment: 'full_time',
    location: 'Arnhem',
    remote: true,
    skills: [
      Skill.ANGULAR, Skill.NESTJS, Skill.GITOPS, Skill.AWS, Skill.TS, Skill.TYPEORM, Skill.NODE, Skill.K8S, Skill.POSTGRES, Skill.RXJS, Skill.GITHUB_ACTIONS, Skill.MAPPING
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? SHORT_DESCRIPTION_EN : SHORT_DESCRIPTION_NL,
    recommendations: [
      {
        description: `_"I have worked together with Niek for one and a half year._  
<br/>
_In this period, I came to know Niek as a skillful and creative developer and person. Both at work and privately, he enjoys tackling difficult problems and loves to discover and learn about new tools, technologies and methods. He does this on his own or in close cooperation with colleagues or team members, depending on what the situation asks for._   
<br/>
_As a friendly, hard working and authentic person, next to his skill, he is a great addition to any team."_`,
        type: 'linkedin',
        name: 'Bart Borghols',
        position: language === 'en' ? 'Worked on the same team' : 'Samengewerkt in hetzelfde team',
        url: 'https://www.linkedin.com/in/niekdewit/details/recommendations/',
        date: new Date('2024-06-18T00:00:00.000Z'),
      },
      {
        description: `_"I had the pleasure of working with Niek for 1.5 years in an agile software development team, where he consistently demonstrated his expertise as a full-stack developer. Niek is an enthusiastic and curious individual who dives head-first into unknown territory, mastering new technologies and solving complex problems with ease._  
<br/>
_He is an excellent team player, always open to discussing complex issues and minor details, such as code styling, ensuring the best practices are followed. I have witnessed his remarkable growth from a heavy medior to a senior developer. In his senior role, Niek has shown exceptional leadership skills, capable of taking the lead, coaching team members, and sharing his extensive knowledge._  
<br/>
_His dependability and ability to handle any task thrown his way make him a valuable asset to any team. It has been a privilege to work alongside Niek, and I am confident that he will continue to excel in his career."_`,
        type: 'linkedin',
        name: 'Ferdi Sancak',
        position: language === 'en' ? 'Worked on the same team' : 'Samengewerkt in hetzelfde team',
        url: 'https://www.linkedin.com/in/niekdewit/details/recommendations/',
        date: new Date('2024-06-25T00:00:00.000Z'),
      },
    ]
  }
}
