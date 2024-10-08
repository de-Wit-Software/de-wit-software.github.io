
import Link from "@/components/widgets/link/link.widget.component";
import { AppState } from "@/services/state/app/app.state";
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function About(props: {
  appState: AppState,
  className?: string
}) {
  const className = `text-lg sm:text-justify ${props.className}`;
  const aboutMeTextParts = props.appState.aboutMeText.split('~~CTA~~');
  const ctaText = props.appState.ctaText;
  const ctaStyling = `flex justify-center my-8`;
  return <div>
    <div className={className}><MDXRemote source={aboutMeTextParts[0]} /></div>
    <div className={ctaStyling}><Link id='CTA' className="text-2xl text-center min-w-[170px] h-min" newTab={false} selected={false} href='' text={ctaText}></Link></div>
    <div className={className}><MDXRemote source={aboutMeTextParts[1]} /></div>
  </div>
}

