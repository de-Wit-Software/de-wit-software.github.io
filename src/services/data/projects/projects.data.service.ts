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
  recommendations: Recommendation[]
}

export default class ProjectsDataService {
  public getProjects(language: 'en' | 'nl'): Project[] {
    return [
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
    ];
  }
}