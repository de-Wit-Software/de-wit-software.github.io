import AboutDataService from "@/services/data/about/about.data.service"
import ContactDataService, { ContactInfoItem } from "@/services/data/contact/contact.data.service";
import ExternalUrlsDataService from "@/services/data/external_urls/external_urls.data.service";
import LabelsDataService, { Labels } from "@/services/data/labels/labels.data.service";
import ProjectsDataService, { Project } from "@/services/data/projects/projects.data.service";
import SkillsDataService, { Skill } from "@/services/data/skills/skills.data.service";

export type AppState = {
  aboutMeText: string
  labels: Labels
  githubSource: string
  skillsEducationText: string,
  skillsExpertiseText: string,
  skillsPersonalText: string,
  expertiseSkills: Skill[],
  personalSkills: Skill[],
  contactInfo: ContactInfoItem[],
  projects: Project[]
}

export default function CreateAppState(
  _language: 'en' | 'nl',
  _aboutDataService: AboutDataService,
  _labelsDataService: LabelsDataService,
  _externalUrlsService: ExternalUrlsDataService,
  _skillsDataService: SkillsDataService,
  _contactDataService: ContactDataService,
  _projectDataService: ProjectsDataService
) {
  const labels = _labelsDataService.getLabels(_language);
  return {
    aboutMeText: _aboutDataService.getAboutMeText(_language),
    labels: labels,
    githubSource: _externalUrlsService.getGithubSource(),
    contactInfo: _contactDataService.getContactInfo(_language, labels.contact),
    projects: _projectDataService.getProjects(_language),
    skillsEducationText: _skillsDataService.getEducationText(_language),
    skillsExpertiseText: _skillsDataService.getExpertiseText(_language),
    skillsPersonalText: _skillsDataService.getPersonalText(_language),
    expertiseSkills: _skillsDataService.getExpertiseSkills(),
    personalSkills: _skillsDataService.getPersonalSkills(),
  }
}