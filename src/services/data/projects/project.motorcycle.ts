import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `I am currently spending much of my spare time on a project converting a second hand Yamaha XJR 1300 into an electic motorcycle.  
For this project, one of the biggest challenges is building the battery pack. Mounting everything properly. And doing everything safely.  
Progress of this project is ongoing, and [I will be posting updates on the endless-sphere forum](https://endless-sphere.com/sphere/threads/yamaha-xjr-1300-build-log.124217/).`;

const DESCRIPTION_NL = `Ik besteed momenteel veel van mijn vrije tijd aan een project waarbij ik een tweedehands Yamaha XJR 1300 ombouw tot een elektrische motorfiets.  
Voor dit project is een van de grootste uitdagingen het bouwen van het accupakket. Alles goed monteren. En alles veilig doen.  
De voortgang van dit project is gaande, en [ik zal updates plaatsen op het endless-sphere forum](https://endless-sphere.com/sphere/threads/yamaha-xjr-1300-build-log.124217/).`;

export function Motorcycle(language: 'en' | 'nl'): Project {
  return {
    company: language === 'en' ? 'Motorcycle EV Conversion' : 'Motorfiets EV Conversie',
    function: '',
    start: new Date('2023-11-01T00:00:00.000Z'),
    end: new Date(),
    type: 'personal_project',
    commitment: 'part_time',
    skills: [
      Skill.CURA, Skill.ARDUINO, Skill.OPENSCAD, Skill.KICAD
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}