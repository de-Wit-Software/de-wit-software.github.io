import { getTimeDiffString } from "@/libs/time_utils";
import { AppState } from "@/services/state/app/app.state";
import { MDXRemote } from 'next-mdx-remote/rsc';


export default function About(props: {
  appState: AppState,
  className?: string
}) {
  const workTime = getTimeDiffString(new Date("Mon Jul 31 2017 22:00:00 GMT+0000"), new Date(), props.appState.labels);
  const aboutMeText = props.appState.aboutMeText.replace('{time}', workTime);
  const className = `text-lg sm:text-justify ${props.className}`;
  return <div className={className}><MDXRemote source={aboutMeText} /></div>
}

