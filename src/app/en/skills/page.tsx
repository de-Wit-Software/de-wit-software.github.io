import ContextWrapper from "@/app/context";
import Skills from "@/components/features/skills/skills.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <BaseLayout appState={props.appState}><Skills appState={props.appState}></Skills></BaseLayout>
  }
);

export default Page;
