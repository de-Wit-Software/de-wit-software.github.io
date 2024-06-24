import ContextWrapper from "@/app/context";
import About from "@/components/features/about/about.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'nl',
  (props: any) => {
    return <BaseLayout appState={props.appState}><About appState={props.appState}></About></BaseLayout>
  }
);

export default Page;
