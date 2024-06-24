import AboutDataService from "@/services/data/about/about.data.service";
import ContactDataService from "@/services/data/contact/contact.data.service";
import ExternalUrlsDataService from "@/services/data/external_urls/external_urls.data.service";
import LabelsDataService from "@/services/data/labels/labels.data.service";
import ProjectsDataService from "@/services/data/projects/projects.data.service";
import SkillsDataService from "@/services/data/skills/skills.data.service";
import CreateAppState, { AppState } from "@/services/state/app/app.state";
import { FunctionComponent } from "react";

export type Props = {
  appState: AppState;
}

export default function ContextWrapper(
  language: 'en' | 'nl',
  functionComponent: FunctionComponent
): FunctionComponent {
  return (props, ref) => {
    props = {
      ...props,
      appState: CreateAppState(
        language,
        new AboutDataService(),
        new LabelsDataService(),
        new ExternalUrlsDataService(),
        new SkillsDataService(),
        new ContactDataService(),
        new ProjectsDataService()
      )
    }
    return functionComponent(props, ref);
  }
}