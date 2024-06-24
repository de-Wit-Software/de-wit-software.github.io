
import { AppState } from "@/services/state/app/app.state";
import { MDXRemote } from 'next-mdx-remote/rsc';


export default function About(props: {
  appState: AppState,
  className?: string
}) {
  const className = `text-lg sm:text-justify ${props.className}`;
  return <div className={className}><MDXRemote source={props.appState.aboutMeText} /></div>
}

