import { Props } from "@/app/context";
import ProjectWidget from "@/components/widgets/project/project.widget.component";
import { getTimeString } from "@/libs/time_utils";
import { Project } from "@/services/data/projects/projects.data.service";
import { AppState } from "@/services/state/app/app.state";
import { ResumeType } from "@/types";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";


export default function Projects(props: {
  appState: AppState,
  className?: string,
  resumeType?: ResumeType
}) {
  const className = `w-full mb-48 ${props.className || ''}`
  const resumeMarginBottom = 'mb-96';
  const projectsPage1 = (props.appState.projects[props.resumeType || 'none'].page1 || [])
    .sort((a, b) => b.start.getTime() - a.start.getTime());
  const projectsPage2 = (props.appState.projects[props.resumeType || 'none'].page2 || [])
    .sort((a, b) => b.start.getTime() - a.start.getTime());
  const highlightedProject = props.appState.projects[props.resumeType || 'none'].highlighted;

  const allProjects = ([...projectsPage1, ...projectsPage2, highlightedProject]
    .filter(Boolean) as Project[]
  ).sort((a, b) => b.start.getTime() - a.start.getTime());

  return <div className={className}>


    {(props.resumeType ? [] : allProjects).map((project, i) => (
      <div className="mb-2 flex flex-col sm:flex-row" key={i}>
        <Link className="min-w-72 flex flex-row items-center" href={`#${project.company}`}><FaLink className="mr-2"/>{project.company}</Link>
        <div className="flex-row min-w-60 hidden xl:flex">
          <div className="mr-2">{project.type === 'work' ? props.appState.labels.projects.type.work : props.appState.labels.projects.type.personalProject}</div>
        </div>
        <div className="">
          {getTimeString(project.start, props.appState.labels)} - {getTimeString(project.end, props.appState.labels)}
        </div>
      </div>
    ))}
    <div className={props.resumeType ? "hidden" : "flex flex-row justify-center my-16"}>
      <FaAnglesDown className="text-portfolio-text" size="50"></FaAnglesDown>
    </div>
    {highlightedProject ? (<div className={"relative mb-6 " + (projectsPage1.length === 0 ? resumeMarginBottom : '')}>
      <div className="absolute top-0 left-0 w-[calc(100%+2rem)] h-full -z-10 border-4 rounded-xl mt-2.5 -ml-4 border-portfolio-accent"></div>

      <div className="text-base font-bold mb-4 bg-white w-fit px-2 -ml-2">{props.appState.labels.projects.highlighted}</div>
      <ProjectWidget project={highlightedProject} resume={!!props.resumeType} labels={props.appState.labels}></ProjectWidget>

    </div>) : (<div></div>)}

    {projectsPage1.map((project, i) => (
      <div className={(props.resumeType ? (i === projectsPage1.length - 1 ? resumeMarginBottom : 'mb-4 ') : "mb-16 ")} key={i}>
        <ProjectWidget project={project} resume={!!props.resumeType} labels={props.appState.labels}></ProjectWidget>
      </div>
    ))}
    {projectsPage2.map((project, i) => (
      <div className={props.resumeType ? (i === 0 ? 'mb-4' : 'mb-4') : "mb-16"} key={i}>
        <ProjectWidget project={project} resume={!!props.resumeType} labels={props.appState.labels}></ProjectWidget>
      </div>
    ))}
  </div>
}
