import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `Co-developing Express Me, an app that assists people with speech impairments, using a React Native front-end and a Spring Boot back-end, deployed in an AWS cloud environment. I'm excited to share more about this project in person! [ExpressMe](https://expressme.nl/)`;

const DESCRIPTION_NL = `Samen met een andere developer ontwikkel ik Express Me, een app die mensen met spraakproblemen helpt, met een React Native front-end en een Spring Boot back-end, gedeployed op een AWS-cloudomgeving. Ik vertel je graag persoonlijk meer over dit project! [ExpressMe](https://expressme.nl/)`;

export function ExpressMe(language: 'en' | 'nl'): Project {
  return {
    company: language === 'en' ? 'Express Me' : 'Express Me',
    function: '',
    start: new Date('2024-07-01T00:00:00.000Z'),
    end: new Date(),
    type: 'work',
    commitment: 'part_time',
    remote: true,
    skills: [
      Skill.ANDROID, Skill.JAVA, Skill.REACT_NATIVE, Skill.AWS, Skill.TS, Skill.RXJS, Skill.POSTGRES, Skill.GITHUB_ACTIONS, Skill.MICRONAUT, Skill.EXPO
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}