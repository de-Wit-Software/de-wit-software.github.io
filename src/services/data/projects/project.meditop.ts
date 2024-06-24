import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `Together with one other developer, we created a system which allowed the company to monitor deployed hardware solutions from a distance. We developed a native Android app, REST API and ASP.NET Web app.`;

const DESCRIPTION_NL = `Samen met een andere ontwikkelaar hebben we een systeem ontwikkeld waarmee het bedrijf hardwareoplossingen op afstand kan monitoren. We hebben een native Android-app, een REST API en een ASP.NET-webapp ontwikkeld.`;

export function Meditop(language: 'en' | 'nl'): Project {
  return {
    company: 'MediTop Medical Products',
    function: 'Junior Developer',
    start: new Date('2016-06-01T00:00:00.000Z'),
    end: new Date('2017-01-30T00:00:00.000Z'),
    type: 'work',
    commitment: 'full_time',
    location: 'Montfoort',
    remote: false,
    skills: [
      Skill.JAVA, Skill.ASP_NET, Skill.ANDROID
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    recommendations: []
  }
}