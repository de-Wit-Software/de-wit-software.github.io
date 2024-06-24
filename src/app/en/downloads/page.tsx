import ContextWrapper from "@/app/context";
import Downloads from "@/components/features/downloads/downloads.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <BaseLayout appState={props.appState}><Downloads appState={props.appState}></Downloads></BaseLayout>
  }
);

export default Page;
