import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `At Bricks & Goggles, I did an internship. During this internship, I helped developing Virtual Reality applications for the Oculus Rift. I also developed Unity plugins which allowed the team to make more accurate time estimations, and reduced the time required to import and prepare/optimize architectural models to be used for VR. I did research on performance optimizations for VR in Unity/C#.`;

const DESCRIPTION_NL = `Bij Bricks & Goggles heb ik stage gelopen. Tijdens deze stage hielp ik bij het ontwikkelen van Virtual Reality-toepassingen voor de Oculus Rift. Ik ontwikkelde ook Unity-plugins waarmee het team nauwkeurigere tijdschattingen kon maken. Deze plugins verminderde ook de tijd die nodig was om architecturale modellen te importeren en voor VR voor te bereiden/optimaliseren. Ik deed onderzoek naar performance optimalisaties voor VR in Unity/C#.`;

export function BricksAndGoggles(language: 'en' | 'nl'): Project {
  return {
    company: 'Bricks & Goggles',
    function: 'VR Developer Internship',
    start: new Date('2016-09-01T00:00:00.000Z'),
    end: new Date('2017-02-28T00:00:00.000Z'),
    type: 'work',
    commitment: 'full_time',
    location: 'Nieuwendijk',
    remote: false,
    skills: [
      Skill.UNITY, Skill.C_SHARP, Skill.BLENDER
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}