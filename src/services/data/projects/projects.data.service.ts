import { ResumeType } from "@/types";
import { Skill } from "../skills/skills.data.service";
import { Alliander } from "./project.alliander";
import { Arcadable } from "./project.arcadable";
import { BricksAndGoggles } from "./project.bricks_and_goggles";
import { BuddyBall } from "./project.buddyball";
import { ExpressMe } from "./project.express_me";
import { Meditop } from "./project.meditop";
import { Motorcycle } from "./project.motorcycle";
import { SocialBrothers } from "./project.social_brothers";
import { SyncVRMedical } from "./project.syncvr";
import { Targomo } from "./project.targomo";

export type Recommendation = {
  description: string;
  type: 'letter' | 'linkedin',
  name: string
  position: string
  url?: string
  date: Date
}

export type Project = {
  company: string
  function: string
  start: Date
  end: Date
  type: 'work' | 'personal_project'
  commitment: 'full_time' | 'on_call' | 'part_time',
  location?: string
  remote?: boolean,
  skills: Skill[],
  description: string,
  shortDescription: string,
  recommendations: Recommendation[],
}

export default class ProjectsDataService {
  public getProjects(language: 'en' | 'nl') {
    return {
      [ResumeType.WEB]: {
        highlighted: [
          Alliander(language)
        ],
        page1: [
          ExpressMe(language),
        ],
        page2: [
          SyncVRMedical(language),
          Targomo(language),
          SocialBrothers(language),
          BricksAndGoggles(language),
          Meditop(language),
        ]
      },      
      [ResumeType.MOBILE]: {
        highlighted: [
          ExpressMe(language)
        ],
        page1: [
          Alliander(language),
        ],
        page2: [
          SyncVRMedical(language),
          Targomo(language),
          SocialBrothers(language),
          BricksAndGoggles(language),
          Meditop(language),
        ]
      },  
      [ResumeType.GAME]: {
        highlighted: [
          BuddyBall(language),
          Arcadable(language),
        ],
        page1: [
        ],
        page2: [
          ExpressMe(language),
          Alliander(language),
          SyncVRMedical(language),
          Targomo(language),
          BricksAndGoggles(language),
        ]
      },
      'none': {
        highlighted: undefined,
        page1: [
          ExpressMe(language),
          Motorcycle(language),
          Alliander(language),
          BuddyBall(language),
          SyncVRMedical(language),
          Arcadable(language),
          Targomo(language),
          SocialBrothers(language),
          BricksAndGoggles(language),
          Meditop(language),
        ],
      },
    }
  }
}