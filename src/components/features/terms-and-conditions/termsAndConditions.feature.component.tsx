
import { AppState } from "@/services/state/app/app.state";
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function TermsAndConditions(props: {
  appState: AppState,
  className?: string
}) {
  const className = `prose max-w-full ${props.className}`;
  const termsAndConditionsText = props.appState.termsAndConditions
  return <div>
    <div className={className}><MDXRemote source={termsAndConditionsText} /></div>
  </div>
}

