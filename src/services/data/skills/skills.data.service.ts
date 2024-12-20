import { ResumeType } from "@/types";

export enum Skill {
  ANGULAR = 'Angular V2+',
  ARGO = 'ArgoCD',
  AWS = 'AWS',
  CLOUDFLARE = 'Cloudflare',
  DOCKER = 'Docker',
  MAPPING = 'Dynamic web maps',
  EXPRESS = 'Express.js',
  GCP = 'GCP',
  GITHUB_ACTIONS = 'Github Actions',
  GITOPS = 'GitOps',
  GRAPHQL = 'GraphQL',
  JS = 'JavaScript',
  K8S = 'Kubernetes',
  NESTJS = 'NestJS',
  NODE = 'Node.js',
  NOSQL = 'NoSQL',
  REST = 'RESTful',
  RXJS = 'RXJS/NGXS/NgRx',
  POSTGRES = 'Postgres',
  STRIPE = 'Stripe',
  MYSQL = 'MySQL',
  TYPEORM = 'TypeORM',
  TS = 'Typescript',
  UNITY = 'Unity',
  PRINTING_3D = '3D Printing',
  ARDUINO = 'Arduino',
  C_SHARP = 'C#',
  CPP = 'C++',
  JAVA = 'Java',
  KICAD = 'KiCad',
  OPENSCAD = 'OpenScad',
  REACT_NATIVE = 'React Native',
  NEXT = 'Next.js',
  BLENDER = 'Blender',
  FUSION = 'Photon Fusion',
  CURA = 'Ultimaker Cura',
  HUGO = 'HUGO',
  ANDROID = 'Android Native',
  ASP_NET = 'ASP.net',
  MICRONAUT = 'Micronaut',
  HTML = 'HTML',
  CSS = 'CSS',
  RESPONSIVE_DESIGN = 'Responsive design',
  CROSS_BROWSER = 'Cross-Browser Compatibility',
  GIT = 'Git',
  CI_CD = 'CI/CD',
  AGILE = 'Agile/Scrum',
  UNIT_TEST = 'Unit Testing',
  JASMINE = 'Jasmine',
  KARMA = 'Karma',
  SASS = 'SASS',
  NPM = 'NPM',
  PERFORMANCE = 'Performance Optimization',
  ACCESSIBILITY = 'Accessibility (WCAG)',
  REVIEWS = 'Code Reviews',
  UX = 'UX/UI Best Practices',
  ASYNC = 'Asynchronous Programming',
  SEO = 'SEO Best Practices',
  SECURITY = 'Web Security',
  EXPO = 'Expo',
  NX = 'NX',
  STORYBOOK = 'Storybook',
}

const SKILLS_EXPERTISE = [
  Skill.ANGULAR,
  Skill.ARGO,
  Skill.AWS,
  Skill.CLOUDFLARE,
  Skill.DOCKER,
  Skill.MAPPING,
  Skill.EXPRESS,
  Skill.GCP,
  Skill.GITHUB_ACTIONS,
  Skill.GITOPS,
  Skill.GRAPHQL,
  Skill.JS,
  Skill.K8S,
  Skill.NESTJS,
  Skill.NODE,
  Skill.NOSQL,
  Skill.REST,
  Skill.RXJS,
  Skill.POSTGRES,
  Skill.STRIPE,
  Skill.MYSQL,
  Skill.TYPEORM,
  Skill.TS,
  Skill.UNITY,
  Skill.HUGO,
  Skill.HTML,
  Skill.CSS,
  Skill.RESPONSIVE_DESIGN,
  Skill.CROSS_BROWSER,
  Skill.GIT,
  Skill.CI_CD,
  Skill.AGILE,
  Skill.UNIT_TEST,
  Skill.JASMINE,
  Skill.KARMA,
  Skill.SASS,
  Skill.NPM,
  Skill.PERFORMANCE,
  Skill.ACCESSIBILITY,
  Skill.REVIEWS,
  Skill.UX,
  Skill.ASYNC,
  Skill.SEO,
  Skill.SECURITY,
  Skill.REACT_NATIVE,
  Skill.EXPO,
  Skill.C_SHARP,
  Skill.NX,
  Skill.STORYBOOK,
]

const SKILLS_HIGHLIGHTED = {
  [ResumeType.WEB]: [
    Skill.ANGULAR,
    Skill.AWS,
    Skill.GRAPHQL,
    Skill.REST,
    Skill.TS,
    Skill.NODE,
    Skill.CI_CD,
    Skill.DOCKER,
    Skill.K8S,
    Skill.RXJS,
    Skill.NX
  ],
  [ResumeType.MOBILE]: [
    Skill.REACT_NATIVE,
    Skill.AWS,
    Skill.GRAPHQL,
    Skill.REST,
    Skill.TS,
    Skill.NODE,
    Skill.CI_CD,
    Skill.DOCKER,
    Skill.K8S,
  ],
  [ResumeType.GAME]: [
    Skill.UNITY,
    Skill.AWS,
    Skill.C_SHARP,
    Skill.TS,
    Skill.NODE,
    Skill.CI_CD,
  ]
}

const SKILLS_PERSONAL = [
  Skill.PRINTING_3D,
  Skill.ARDUINO,
  Skill.CPP,
  Skill.JAVA,
  Skill.KICAD,
  Skill.OPENSCAD,
  Skill.MICRONAUT,
  Skill.ASP_NET,
  Skill.ANDROID,
  Skill.BLENDER,
  Skill.FUSION,
  Skill.NEXT,
  Skill.CURA,
]

const SKILLS_EDUCATION_EN = `**Education**  
HU University of Applied Sciences Utrecht  
Bachelor's degree, HBO-ICT  
2014 - 2018  
Cum Laude (GPA 4.0)  
Student identification number: 1641329`;

const SKILLS_EDUCATION_SHORT_EN = `**Education**  
HU University of Applied Sciences Utrecht - Bachelor's degree, HBO-ICT - 2014 - 2018  
Cum Laude (GPA 4.0) - Student identification number: 1641329`;

const SKILLS_EXPERTISE_EN = `**Highlighted expertise** - _In no particular order_`;

const SKILLS_PROFESSIONAL_EN = `**Extensive professional experience** - _In no particular order_`;

const SKILLS_PERSONAL_EN = `**Other non-professional experience** - _In no particular order_`;


const SKILLS_EDUCATION_NL = `**Opleiding**  
Hogeschool Utrecht  
Bachelor, HBO-ICT  
2014 - 2018  
Cum Laude (GPA 4.0)  
Studentnummer: 1641329`;  

const SKILLS_EDUCATION_SHORT_NL = `**Opleiding**  
Hogeschool Utrecht - Bachelor, HBO-ICT - 2014 - 2018  
Cum Laude (GPA 4.0) - Studentnummer: 1641329`;  


const SKILLS_EXPERTISE_NL = `**Uitgelichte Expertise** - _Zonder specifieke volgorde_`;

const SKILLS_PROFESSIONAL_NL = `**Ruime professionele ervaring** - _Zonder specifieke volgorde_`;

const SKILLS_PERSONAL_NL = `**Overig niet-professionele ervaring** - _Zonder specifieke volgorde_`;


export default class SkillsDataService {
  public getEducationText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_EDUCATION_EN : SKILLS_EDUCATION_NL;
  }
  public getShortEducationText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_EDUCATION_SHORT_EN : SKILLS_EDUCATION_SHORT_NL;
  }
  public getExpertiseText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_EXPERTISE_EN : SKILLS_EXPERTISE_NL;
  }
  public getProfessionalText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_PROFESSIONAL_EN : SKILLS_PROFESSIONAL_NL;
  }
  public getPersonalText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_PERSONAL_EN : SKILLS_PERSONAL_NL;
  }
  public getExpertiseSkills() {

    return {
      ['none']: {
        highlighted: SKILLS_HIGHLIGHTED[ResumeType.WEB].sort(),
        normal: SKILLS_EXPERTISE.sort().filter(skill => !SKILLS_HIGHLIGHTED[ResumeType.WEB].includes(skill))
      },
      [ResumeType.WEB]: {
        highlighted: SKILLS_HIGHLIGHTED[ResumeType.WEB].sort(),
        normal: SKILLS_EXPERTISE.sort().filter(skill => !SKILLS_HIGHLIGHTED[ResumeType.WEB].includes(skill))
      },
      [ResumeType.MOBILE]: {
        highlighted: SKILLS_HIGHLIGHTED[ResumeType.MOBILE].sort(),
        normal: SKILLS_EXPERTISE.sort().filter(skill => !SKILLS_HIGHLIGHTED[ResumeType.MOBILE].includes(skill))
      },
      [ResumeType.GAME]: {
        highlighted: SKILLS_HIGHLIGHTED[ResumeType.GAME].sort(),
        normal: SKILLS_EXPERTISE.sort().filter(skill => !SKILLS_HIGHLIGHTED[ResumeType.GAME].includes(skill))
      },
    };
  }
  public getPersonalSkills() {
    return SKILLS_PERSONAL.sort();
  }
}