import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `At Social Brothers, I worked as an on-call developer to help the team build Virtual Reality applications for the Oculus Rift using Unity/C#. This was a part-time job while being a student.`;

const DESCRIPTION_NL = `Bij Social Brothers heb ik het team ondersteund bij het bouwen van Virtual Reality-toepassingen voor de Oculus Rift met behulp van Unity/C#. Dit was een parttime baan terwijl ik student was.`;

export function SocialBrothers(language: 'en' | 'nl'): Project {
  return {
    company: 'Social Brothers NL',
    function: 'VR Developer',
    start: new Date('2017-04-01T00:00:00.000Z'),
    end: new Date('2017-07-30T00:00:00.000Z'),
    type: 'work',
    commitment: 'on_call',
    location: 'Utrecht',
    remote: false,
    skills: [
      Skill.UNITY, Skill.C_SHARP
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}