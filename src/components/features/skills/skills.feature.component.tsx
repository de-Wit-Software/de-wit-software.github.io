import { AppState } from "@/services/state/app/app.state";
import { ResumeType } from "@/types";
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Skills(props: {
  appState: AppState,
  className?: string,
  resumeType?: ResumeType
}) {
  const className = `${props.className}`;
  const normalSkills = props.appState.expertiseSkills[props.resumeType || 'none'].normal;
  const highlightedSkills = props.appState.expertiseSkills[props.resumeType || 'none'].highlighted;
  return <div className={className}>
    {!props.resumeType ? <div className={'text-lg sm:text-justify mb-6'}><MDXRemote source={props.appState.skillsEducationText} /></div> : null}
    <div >
      <div className={(props.resumeType ? 'text-base ' : 'text-lg ') + "sm:text-justify"}><MDXRemote source={props.appState.skillsExpertiseText} /></div>
      <div className={(props.resumeType ? 'text-base ' : 'text-base ') + "flex flex-row flex-wrap mb-4 opacity-60"}>
        {highlightedSkills.map((skill, i) => (
          <div className="mr-2 font-black" key={i}>{`${skill}${i !== highlightedSkills.length - 1 ? ',' : ''}`}</div>
        ))}
      </div>
      <div className={(props.resumeType ? 'text-base ' : 'text-lg ') + "sm:text-justify"}><MDXRemote source={props.appState.skillsProfessionalText} /></div>
      <div className={(props.resumeType ? 'text-xs ' : 'text-base ') + "flex flex-row flex-wrap mb-4 opacity-60"}>
        {normalSkills.map((skill, i) => (
          <div className="mr-2" key={i}>{`${skill}${i !== normalSkills.length - 1 ? ',' : ''}`}</div>
        ))}
      </div>
    </div>
    <div className={props.resumeType ? 'hidden' : ''}>
      <div className="text-lg sm:text-justify"><MDXRemote source={props.appState.skillsPersonalText} /></div>
      <div className={(props.resumeType ? 'text-xs ' : 'text-base ') + "flex flex-row flex-wrap opacity-60"}>
        {props.appState.personalSkills.map((skill, i) => (
          <div className="mr-2" key={i}>{`${skill}${i !== props.appState.personalSkills.length - 1 ? ',' : ''}`}</div>
        ))}
      </div>
    </div>
  </div>
}


