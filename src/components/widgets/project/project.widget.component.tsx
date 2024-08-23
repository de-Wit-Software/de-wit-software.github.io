import RecommendationItem from "@/components/widgets/recommendation/recommendation.widget.component";
import { getTimeDiffString, getTimeString } from "@/libs/time_utils";
import { Labels } from "@/services/data/labels/labels.data.service";
import { Project } from "@/services/data/projects/projects.data.service";
import ProjectDescription from "../project_description/project_description.widget.component";


export default function ProjectItem(props: {
  project: Project,
  labels: Labels,
  resume?: boolean
}) {
  const workTime = getTimeDiffString(props.project.start, props.project.end, props.labels, true);

  return (
    
    <div>
      <div>
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div className="flex flex-col font-bold">
            <div>{props.project.function}</div>
            <a className="text-portfolio-text" id={props.project.company}><div>{props.project.company}</div></a>
          </div>
          <div className="grow h-px bg-portfolio-text mt-3 mx-8 hidden md:block"></div>
          <div className="font-bold">
            {getTimeString(props.project.start, props.labels)} - {getTimeString(props.project.end, props.labels)}; {(props.resume && getTimeString(props.project.end, props.labels).includes(props.labels.date.now)) ? '' : workTime}
          </div>
        </div>
      </div>
      <div className={(props.resume ? "mb-2 " : "mb-8 ") + "flex flex-col items-start xl:items-end opacity-40	"}>
        {!props.resume ? (
          <div className="flex flex-row">
            <div className="mr-2">{props.project.type === 'work' ? props.labels.projects.type.work : props.labels.projects.type.personalProject}</div>
            <div>({props.project.commitment === 'full_time' ? props.labels.projects.commitment.fullTime : (props.project.commitment === 'on_call' ? props.labels.projects.commitment.onCall : props.labels.projects.commitment.partTime)})</div>
          </div>
        ) : (<></>)}
        {!props.resume && props.project.type === 'work' ? (
          <div className="flex flex-row">
            <div className="mr-2">{props.project.location}</div>
            <div>({props.project.remote ? props.labels.projects.remote.remote : props.labels.projects.remote.onLocation})</div>
          </div>
        ) : (<></>)}


        <div className="flex flex-row flex-wrap justify-start xl:justify-end	">{props.project.skills.sort().map((skill, i) => (
          <div className="mr-4 ml-0 xl:ml-4 xl:mr-0" key={i}>{skill}{i !== props.project.skills.length - 1 ? ',' : ''}</div>
        ))}</div>

      </div>
      <div className="flex flex-col">
        {(props.resume ? [] : props.project.recommendations).map((item, i) => 
          <RecommendationItem key={i} recommendation={item} labels={props.labels}></RecommendationItem>
        )}
      </div>
      <div className="text-lg sm:text-justify whitespace-pre-wrap">
        <ProjectDescription project={props.project} resume={props.resume} labels={props.labels}></ProjectDescription>
      </div>
    </div>
  )
}

