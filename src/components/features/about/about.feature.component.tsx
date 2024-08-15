
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

  return <div>
    <div className={className}><MDXRemote source={aboutMeTextParts[0]} /></div>
    <div className="flex justify-center my-8"><Link id='CTA' className="text-2xl min-w-[170px] leading-10" newTab={false} selected={false} href='' text={ctaText}></Link></div>
    <div className={className}><MDXRemote source={aboutMeTextParts[1]} /></div>
  </div>
}

