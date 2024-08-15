import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `Together with another developer, we are developing Express Me. An app that helps people who have difficulties speaking.  
This is a React Native frontend, connected to a Spring Boot backend, deployed on an AWS cloud environment.  
I Would love to tell you more about this project in person! [ExpressMe](https://expressme.nl/)`;

const DESCRIPTION_NL = `Samen met een andere developer, ontwikkelen we Express Me. Een app die mensen met spraakproblemen helpt om weer te kunnen praten.  
Dit is een React Native frontend, verbonden met een Spring Boot backend, gedeployed op een AWS cloud omgeving.  
Ik vertel je graag persoonlijk meer over dit project! [ExpressMe](https://expressme.nl/)`;

export function ExpressMe(language: 'en' | 'nl'): Project {
  return {
    company: language === 'en' ? 'Express Me' : 'Express Me',
    function: '',
    start: new Date('2024-07-01T00:00:00.000Z'),
    end: new Date(),
    type: 'work',
    commitment: 'part_time',
    skills: [
      Skill.ANDROID, Skill.JAVA, Skill.REACT_NATIVE, Skill.AWS, Skill.TS, Skill.RXJS, Skill.POSTGRES, Skill.GITHUB_ACTIONS, Skill.SPRING_BOOT
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}