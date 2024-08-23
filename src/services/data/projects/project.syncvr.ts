import { Project } from "@/services/data/projects/projects.data.service";
import { Skill } from "@/services/data/skills/skills.data.service";


const DESCRIPTION_EN = `At SyncVR, I was the lead web-developer. Here it was my main responsibility to develop and maintain a custom platform front-end (Angular) and backend (Node.js/Express) on Google Cloud Platform. Initially, this platform was used as an internal tool to manage healthcare institutions, leased VR devices and their available VR applications.  
Over time, this system transformed into a platform where healthcare professionals can log in to manage devices from a distance (mobile device management features). While app developers can log in to manage their apps and app versions/releases (app store features). This is a platform which I developed from scratch mostly on my own in the beginning. In the last half year, other developers joined the team to support the project.   
During my last period at SyncVR, I spent most of my time on refactoring the architecture of the platform to accommodate a switch from a NoSQL document database (Firestore) to a relational database (MySQL). With all the hurdles you can imagine for such a task. I took the responsibility upon myself to learn how to create a beautiful GraphQL implementation which could facilitate this complex migration. I must say, this turned me into a real GraphQL fanboy.  
Over the years at SyncVR, I worked closely with business developers, clients, designers and other developers. To specify functional and technical requirements for the platform. I also mentored several students to help make their VR applications performant, and delivered within the given deadline.`;

const DESCRIPTION_NL = `Bij SyncVR was ik de lead web-developer. Hier was mijn voornaamste verantwoordelijkheid het ontwikkelen en onderhouden van een op maat gemaakt platform front-end (Angular) en backend (Node.js/Express) op Google Cloud Platform. Aanvankelijk werd dit platform gebruikt als een intern hulpmiddel om zorginstellingen, geleasede VR-apparaten en hun beschikbare VR-toepassingen te beheren.  
In de loop van de tijd transformeerde dit systeem in een platform waar zorgprofessionals kunnen inloggen om apparaten op afstand te beheren (mobile device management functionaliteiten). Terwijl app-ontwikkelaars kunnen inloggen om hun apps en app-versies/releases te beheren (app store functionaliteiten). Dit is een platform dat ik vanaf het begin grotendeels zelfstandig heb ontwikkeld. In het laatste half jaar sloten andere ontwikkelaars zich aan bij het team om het project te ondersteunen.  
Tijdens mijn laatste periode bij SyncVR heb ik het grootste deel van mijn tijd besteed aan het refactoren van de architectuur van het platform om een overstap van een NoSQL document database (Firestore) naar een relationele database (MySQL) mogelijk te maken. Met alle hindernissen die je je kunt voorstellen bij een dergelijke opdracht. Ik nam de verantwoordelijkheid op me om te leren hoe ik een mooie GraphQL-implementatie kon maken die deze complexe migratie kon faciliteren. Ik moet zeggen, ik ben hierdoor een echte GraphQL fanboy geworden.  
In de loop der jaren bij SyncVR heb ik nauw samengewerkt met business developers, klanten, ontwerpers en andere ontwikkelaars om functionele en technische eisen voor het platform te specificeren. Ik heb ook verschillende studenten begeleid om ervoor te zorgen dat hun VR-toepassingen performant waren en binnen de gestelde deadline werden geleverd.`;

const SHORT_DESCRIPTION_EN = `At SyncVR, I was the lead web developer, responsible for developing and maintaining a custom platform with an Angular front-end and Node.js/Express backend on Google Cloud. I led the platform’s evolution from an internal tool to a comprehensive system for remote device management and app store features, eventually refactoring it to migrate from Firestore to MySQL, using a GraphQL implementation I developed. I also collaborated with stakeholders and mentored students on VR applications.`;
const SHORT_DESCRIPTION_NL = `Bij SyncVR was ik de lead web-developer, verantwoordelijk voor het ontwikkelen en onderhouden van een op maat gemaakt platform met een Angular front-end en Node.js/Express backend op Google Cloud. Ik leidde de evolutie van het platform van een intern hulpmiddel naar een systeem voor remote device management en app store functionaliteiten, en refactoriseerde het om van Firestore naar MySQL te migreren, met een GraphQL-implementatie die ik ontwikkelde. Daarnaast werkte ik samen met stakeholders en begeleidde ik studenten bij hun VR-toepassingen.`;

export function SyncVRMedical(language: 'en' | 'nl'): Project {
  return {
    company: 'SyncVR Medical',
    function: 'Lead Platform Developer',
    start: new Date('2020-04-01T00:00:00.000Z'),
    end: new Date('2022-04-30T00:00:00.000Z'),
    type: 'work',
    commitment: 'full_time',
    location: 'Utrecht',
    remote: true,
    skills: [
      Skill.GCP, Skill.CLOUDFLARE, Skill.MYSQL, Skill.NOSQL, Skill.GRAPHQL, Skill.GITHUB_ACTIONS, Skill.ANGULAR, Skill.RXJS, Skill.NODE, Skill.EXPRESS, Skill.TS, Skill.JS, Skill.UNITY, Skill.C_SHARP
    ],
    description: language === 'en' ? DESCRIPTION_EN : DESCRIPTION_NL,
    shortDescription: language === 'en' ? SHORT_DESCRIPTION_EN : SHORT_DESCRIPTION_NL,
    recommendations: [
      {
        description: `_"I really enjoyed working intensively with Niek for almost seven months. Niek is a highly knowledgeable, solution focused and outside-the-box creative thinker and a very productive software developer. In his communication he's extremely honest about estimations, his skills and his expectations which makes him very reliable to work with. He contributed in all kinds of ways to our startup during his years with us which makes it sad to see him leave. Besides being a high potential young professional, he's also very surprising in his private projects (ask him about this!) which demonstrates his passion for using technology in a fun and functional way. An authentic human being whose smile in the daily standup I will miss!"_`,
        type: 'linkedin',
        name: 'Erwin van Lun',
        position: language === 'en' ? 'Worked on the same team' : 'Samengewerkt in hetzelfde team',
        url: 'https://www.linkedin.com/in/niekdewit/details/recommendations/',
        date: new Date('2022-04-28T00:00:00.000Z'),
      },
      {
        description: `_"Had the chance to do some software development with Niek during his time at SyncVR Medical. Beside being a great guy to be around he is an incredibly productive developer, able to build from scratch, get things out very fast and owning a new piece of stack very quickly.  
You don't come around a real Full Stack Dev that often."_`,
        type: 'linkedin',
        name: 'Paul Garcia Pelayo',
        position: language === 'en' ? 'Worked on the same team' : 'Samengewerkt in hetzelfde team',
        url: 'https://www.linkedin.com/in/niekdewit/details/recommendations/',
        date: new Date('2022-04-13T00:00:00.000Z'),
      },
    ]
  }
}