import ContextWrapper from "@/app/context";
import Projects from "@/components/features/projects/projects.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'nl',
  (props: any) => {
    return <BaseLayout appState={props.appState}><Projects appState={props.appState}></Projects></BaseLayout>
  }
);

export default Page;
