import AboutDataService from "@/services/data/about/about.data.service"
import ContactDataService, { ContactInfoItem } from "@/services/data/contact/contact.data.service";
import ExternalUrlsDataService from "@/services/data/external_urls/external_urls.data.service";
import LabelsDataService, { Labels } from "@/services/data/labels/labels.data.service";
import ProjectsDataService, { Project } from "@/services/data/projects/projects.data.service";
import SkillsDataService, { Skill } from "@/services/data/skills/skills.data.service";
import { ResumeType } from "@/types";

export type AppState = {
  aboutMeText: string
  aboutMeShortText: {
    [key in ResumeType]: string
  }
  ctaText: string
  resumeTimeText: string,
  labels: Labels
  githubSource: string
  skillsEducationText: string,
  skillsShortEducationText: string,
  skillsExpertiseText: string,
  skillsProfessionalText: string,
  skillsPersonalText: string,
  expertiseSkills: {
    [key in ResumeType]: {
      normal: Skill[],
      highlighted: Skill[]
    }
  } & {
    none: {
      normal: Skill[],
      highlighted: Skill[]
    }
  },
  personalSkills: Skill[],
  contactInfo: ContactInfoItem[],
  email: string;
  linkedIn: string;
  address: string;
  projects: {
    [key in ResumeType]: {
      highlighted?: Project[],
      page1: Project[],
      page2: Project[]
    }
  } & {
    none: {
      highlighted?: Project[],
      page1: Project[],
      page2: Project[]
    }
  },
  language: 'en' | 'nl'
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
    language: _language,
    aboutMeText: _aboutDataService.getAboutMeText(_language),
    aboutMeShortText: _aboutDataService.getShortAboutMeText(_language),
    ctaText: _aboutDataService.getCTAText(_language),
    resumeTimeText: _aboutDataService.getResumeTimeText(_language),
    labels: labels,
    githubSource: _externalUrlsService.getGithubSource(),
    contactInfo: _contactDataService.getContactInfo(_language, labels.contact),
    projects: _projectDataService.getProjects(_language),
    skillsEducationText: _skillsDataService.getEducationText(_language),
    skillsShortEducationText: _skillsDataService.getShortEducationText(_language),
    skillsExpertiseText: _skillsDataService.getExpertiseText(_language),
    skillsProfessionalText: _skillsDataService.getProfessionalText(_language),
    skillsPersonalText: _skillsDataService.getPersonalText(_language),
    expertiseSkills: _skillsDataService.getExpertiseSkills(),
    personalSkills: _skillsDataService.getPersonalSkills(),
    email: _contactDataService.getEmail(),
    linkedIn: _contactDataService.getLinkedIn(),
    address: _contactDataService.getAddress(_language)
  }
}