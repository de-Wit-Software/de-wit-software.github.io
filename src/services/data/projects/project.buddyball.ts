import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `[Video of this project (Youtube)](https://www.youtube.com/watch?v=6U0W0g_EiDo), [Link to the game (itch.io)](https://hmmmmniek.itch.io/buddyball)  
This is [my winning submission](https://itch.io/jam/back-to-school-multiplayer-game-jam-2022/rate/1745917) of the Back to School Multiplayer Game Jam 2022, under the category "Best competitive Gameplay".  
After SyncVR, I started working on a multiplayer e-sports game in Unity as a technical challenge for myself. I planned to finish and release this game on Steam, but never actually got around to finishing it.. maybe someday ;) It is playable though! This game is made in Unity using C# and the Photon Fusion service for the multiplayer component. I used machine learning (Unity ML-Agents) to train AI opponents for the game.  
During development of this game, performance/framerate has always been one of the highest priorities next to optimizing the architecture of the project for a high scalability/flexibility.  
Unity UI Toolkit was during the development of this proejct a relatively new feature introduced by Unity. In many ways it is similar to HTML/CSS/JS. However with many features still missing. Such as a good native support for component based UI work. So I managed to create a very minimalist Angular-like framework within my own project, which allows me to still work with a sort of UXML/USS/C# web-component system for my Unity project. This taught me even more about the internal workings of existing web frameworks like Angular and React.`;

const DESCRIPTION_NL = `[Video van dit project (Youtube)](https://www.youtube.com/watch?v=6U0W0g_EiDo), [Link naar het spel (itch.io)](https://hmmmmniek.itch.io/buddyball)  
Dit is [mijn winnende inzending](https://itch.io/jam/back-to-school-multiplayer-game-jam-2022/rate/1745917) van de Back to School Multiplayer Game Jam 2022, in de categorie 'Best competitive Gameplay'.
Na SyncVR begon ik te werken aan een multiplayer e-sports game in Unity als een technische uitdaging voor mezelf. Ik was van plan deze game af te maken en uit te brengen op Steam, maar ik ben er nooit aan toegekomen om het af te maken... misschien ooit ;) Het is echter wel speelbaar! Deze game is gemaakt in Unity met behulp van C# en de Photon Fusion service voor het multiplayer component. Ik maakte gebruik van machine learning (Unity ML-Agents) om AI voor de game te trainen.  
Tijdens de ontwikkeling van deze game is performance/framerate altijd een van de hoogste prioriteiten geweest, naast het optimaliseren van de architectuur van het project voor een hoge schaalbaarheid/flexibiliteit.  
Unity UI Toolkit was bij de opzet van dit project een relatief nieuwe feature geïntroduceerd door Unity. In veel opzichten is het vergelijkbaar met HTML/CSS/JS. Echter ontbreken er nog veel functies. Zoals een goede native ondersteuning voor component gebaseerde UI-werk. Dus was het me gelukt om een zeer minimalistisch Angular-achtig framework te creëren binnen mijn eigen project, waardoor ik nog steeds kon werken met een soort UXML/USS/C# web-component systeem voor mijn Unity-project. Hierdoor heb ik nog meer kennis opgedaan over de interne werking van bestaande webframeworks zoals Angular en React.`;

const SHORT_DESCRIPTION_EN = `[Video of this project (Youtube)](https://www.youtube.com/watch?v=6U0W0g_EiDo), [Link to the game (itch.io)](https://hmmmmniek.itch.io/buddyball). This is [my winning submission](https://itch.io/jam/back-to-school-multiplayer-game-jam-2022/rate/1745917) of the Back to School Multiplayer Game Jam 2022, under the category "Best competitive Gameplay".  
I developed a multiplayer e-sports game in Unity using C# and Photon Fusion for multiplayer, along with machine learning (Unity ML-Agents) for AI opponents. Although unfinished, it is playable. Performance optimization and scalable architecture were key priorities. I also developed a minimalist component based framework for the UI, using Unity UI Toolkit, which enhanced my understanding of web frameworks like Angular and React.`

const SHORT_DESCRIPTION_NL = `[Video van dit project (Youtube)](https://www.youtube.com/watch?v=6U0W0g_EiDo), [Link naar het spel (itch.io)](https://hmmmmniek.itch.io/buddyball). Dit is [mijn winnende inzending](https://itch.io/jam/back-to-school-multiplayer-game-jam-2022/rate/1745917) van de Back to School Multiplayer Game Jam 2022, in de categorie 'Best competitive Gameplay'.  
Ik ontwikkelde een multiplayer e-sports game in Unity met C# en Photon Fusion voor multiplayer, en machine learning (Unity ML-Agents) voor AI. Het spel is speelbaar, maar nog niet af. Optimalisatie van performance en schaalbaarheid waren topprioriteiten. Daarnaast ontwikkelde ik een minimalistisch component gebaseerd framework voor de UI, wat mijn kennis van frameworks zoals Angular en React verder heeft verdiept.`

export function BuddyBall(language: 'en' | 'nl'): Project {
  return {
    company: 'BuddyBall',
    function: '',
    start: new Date('2022-05-01T00:00:00.000Z'),
    end: new Date('2022-10-01T00:00:00.000Z'),
    type: 'personal_project',
    commitment: 'full_time',
    skills: [
      Skill.UNITY, Skill.C_SHARP, Skill.BLENDER, Skill.FUSION
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? SHORT_DESCRIPTION_EN : SHORT_DESCRIPTION_NL,
    recommendations: []
  }
}