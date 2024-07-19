
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
  JS = 'Javascript',
  K8S = 'Kubernetes',
  NESTJS = 'NestJS',
  NODE = 'Node.js',
  NOSQL = 'NoSQL',
  REST = 'REST',
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
  SPRING_BOOT = 'Spring Boot'
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
]

const SKILLS_PERSONAL = [
  Skill.PRINTING_3D,
  Skill.ARDUINO,
  Skill.C_SHARP,
  Skill.CPP,
  Skill.JAVA,
  Skill.KICAD,
  Skill.OPENSCAD,
  Skill.REACT_NATIVE,
  Skill.SPRING_BOOT,
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

const SKILLS_EXPERTISE_EN = `**Expertise; 1+ years of professional experience**  
_In no particular order_`;

const SKILLS_PERSONAL_EN = `**Other; Non-professional experience**  
_In no particular order_`;

const SKILLS_EDUCATION_NL = `**Opleiding**  
Hogeschool Utrecht  
Bachelor, HBO-ICT  
2014 - 2018  
Cum Laude (GPA 4.0)  
Studentnummer: 1641329`;  

const SKILLS_EXPERTISE_NL = `**Expertise; 1+ jaar professionele ervaring**  
_Zonder specifieke volgorde_`;

const SKILLS_PERSONAL_NL = `**Overig; Niet-professionele ervaring**  
_Zonder specifieke volgorde_`;


export default class SkillsDataService {
  public getEducationText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_EDUCATION_EN : SKILLS_EDUCATION_NL;
  }
  public getExpertiseText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_EXPERTISE_EN : SKILLS_EXPERTISE_NL;
  }
  public getPersonalText(language: 'en' | 'nl') {
    return language === 'en' ? SKILLS_PERSONAL_EN : SKILLS_PERSONAL_NL;
  }
  public getExpertiseSkills() {
    return SKILLS_EXPERTISE;
  }
  public getPersonalSkills() {
    return SKILLS_PERSONAL;
  }
}