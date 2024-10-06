import ContextWrapper from "@/app/context";
import Resume from "@/components/features/resume/resume.feature.component";
import { ResumeType } from "@/types";


const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <Resume type={ResumeType.WEB} appState={props.appState}></Resume>
  }
);

export default Page;
