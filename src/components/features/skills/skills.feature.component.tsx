import { AppState } from "@/services/state/app/app.state";
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Skills(props: {
  appState: AppState,
  className?: string
}) {
  const className = `${props.className}`;

  return <div className={className}>
    <div className="text-lg sm:text-justify mb-8"><MDXRemote source={props.appState.skillsEducationText} /></div>
    <div className="text-lg sm:text-justify"><MDXRemote source={props.appState.skillsExpertiseText} /></div>
    <div className="flex flex-row flex-wrap mb-8">
      {props.appState.expertiseSkills.map((skill, i) => (
        <div className="mr-3" key={i}>{`${skill}${i !== props.appState.expertiseSkills.length - 1 ? ',' : ''}`}</div>
      ))}
    </div>
    <div className="text-lg sm:text-justify"><MDXRemote source={props.appState.skillsPersonalText} /></div>
    <div className="flex flex-row flex-wrap">
      {props.appState.personalSkills.map((skill, i) => (
        <div className="mr-3" key={i}>{`${skill}${i !== props.appState.personalSkills.length - 1 ? ',' : ''}`}</div>
      ))}
    </div>
  </div>
}


