import { Props } from "@/app/context";
import Project from "@/components/widgets/project/project.widget.component";
import { getTimeString } from "@/libs/time_utils";
import { AppState } from "@/services/state/app/app.state";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";


export default function Projects(props: {
  appState: AppState,
  className?: string
}) {
  const className = `w-full mb-48 ${props.className}`
  return <div className={className}>


    {props.appState.projects.sort((a, b) => b.start.getTime() - a.start.getTime()).map((project, i) => (
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
    <div className="flex flex-row justify-center my-16">
      <FaAnglesDown className="text-portfolio-text" size="50"></FaAnglesDown>
    </div>
    {props.appState.projects.sort((a, b) => b.start.getTime() - a.start.getTime()).map((project, i) => (
      <div className="mb-16" key={i}>
        <Project project={project} labels={props.appState.labels}></Project>
      </div>
    ))}
  </div>
}

