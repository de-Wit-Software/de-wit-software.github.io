import ContextWrapper from "@/app/context";
import Resume from "@/components/features/resume/resume.feature.component";


const Page = ContextWrapper(
  'nl',
  (props: any) => {
    return <Resume appState={props.appState}></Resume>
  }
);

export default Page;
