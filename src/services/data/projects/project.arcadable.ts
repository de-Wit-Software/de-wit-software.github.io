import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `[Video of this project (Youtube)](https://www.youtube.com/watch?v=7bvnTaET6kc)  
In between Targomo and SyncVR, I spent some months learning about embedded software and hardware development. I developed a custom gaming table from scratch. All details about those months are documented [in this blog post (Medium)](https://medium.com/p/790f07e41859).  
Results from this projects are ongoing in my spare time (although, admittedly, have not been able to give this project the commitment it deserves), and can be seen on [this repository (Github)](https://github.com/Arcadable)  
I designed a simple custom PCB using KiCad. Wrote a programming language [(ArcadableScript)](https://github.com/Arcadable/ArcadableVSCodeExtension) from scratch which can be executed as an interpreted language on a Teensy MCU. Or the ArcadableScript can be emulated on the development environment in a custom vsCode extension.  
The big (and fun) challenge about this project is the extremely low level performance optimization. Using 2 teensy MCU controllers in parallel to drive the custom built 42x42 led display, while also outputting audio and executing game logic without any hiccups.`;

const SHORT_DESCRIPTION_EN = `[Video of this project (Youtube)](https://www.youtube.com/watch?v=7bvnTaET6kc) I developed a custom gaming table from scratch, focusing on embedded software and hardware. The project includes designing a PCB with KiCad and creating ArcadableScript, a custom interpretive programming language that runs on a Teensy MCU or via a VSCode extension, all built from scratch. A key challenge was optimizing performance to drive a 42x42 LED display using two MCUs in parallel, while also handling audio and game logic. More details are available in [in this blog post (Medium)](https://medium.com/p/790f07e41859) and [this repository (Github)](https://github.com/Arcadable).`

const DESCRIPTION_NL = `[Video van dit project (Youtube)](https://www.youtube.com/watch?v=7bvnTaET6kc)  
Tussen Targomo en SyncVR heb ik enkele maanden besteed aan het leren over embedded software en hardwareontwikkeling. Ik heb een op maat gemaakte gaming tafel vanaf nul ontwikkeld. Alle details over die maanden zijn gedocumenteerd [in deze blogpost (Medium)](https://medium.com/p/790f07e41859).  
De resultaten van dit project zijn nog steeds in mijn vrije tijd gaande (hoewel ik toe moet geven dat ik dit project niet de tijd heb kunnen geven die het verdient), en zijn te zien in [deze repository (Github)](https://github.com/Arcadable).  
Ik heb een eenvoudige PCB ontworpen met KiCad. Ik heb een zelf een programmeertaal ontwikkeld [(ArcadableScript)](https://github.com/Arcadable/ArcadableVSCodeExtension) die kan worden uitgevoerd als een geïnterpreteerde taal op een Teensy MCU. Of het ArcadableScript kan worden geëmuleerd in de ontwikkelomgeving in een Arcadable vsCode-extensie.  
De grote (en leuke) uitdaging van dit project is de extreem low level performance optimalisatie. Het gebruik van 2 Teensy MCU-controllers in parallel om het zelfgebouwde 42x42 led-display aan te sturen, terwijl ook audio moet worden afgespeeld en game-logica zonder haperingen moet worden uitgevoerd.`;

const SHORT_DESCRIPTION_NL = `[Video van dit project (Youtube)](https://www.youtube.com/watch?v=7bvnTaET6kc) Ik heb een op maat gemaakte gaming tafel ontwikkeld, met een focus op embedded software en hardware. Het project omvatte het ontwerpen van een PCB met KiCad en het ontwikkelen van ArcadableScript, een interpretive programmeertaal die draait op een Teensy MCU of in een VSCode-extensie, allemaal "from scratch" ontwikkeld. De uitdaging was het optimaliseren van prestaties om een 42x42 LED-display met twee MCU's aan te sturen, samen met audio en game-logica. Meer details vind je [in deze blogpost (Medium)](https://medium.com/p/790f07e41859) en [deze repository (Github)](https://github.com/Arcadable).`;
export function Arcadable(language: 'en' | 'nl'): Project {
  return {
    company: 'Arcadable',
    function: '',
    start: new Date('2019-11-01T00:00:00.000Z'),
    end: new Date('2020-04-30T00:00:00.000Z'),
    type: 'personal_project',
    commitment: 'full_time',
    skills: [
      Skill.CPP, Skill.ARDUINO, Skill.KICAD
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? SHORT_DESCRIPTION_EN : SHORT_DESCRIPTION_NL,
    recommendations: []
  }
}