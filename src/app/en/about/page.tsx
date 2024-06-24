import ContextWrapper, { Props } from "@/app/context";
import About from "@/components/features/about/about.feature.component";
import AboutClient from "@/components/features/about/about_client.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <BaseLayout appState={props.appState}>
      <About appState={props.appState}></About>
      <AboutClient appState={props.appState}></AboutClient>
    </BaseLayout>
  }
);

export default Page;
