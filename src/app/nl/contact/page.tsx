
import ContextWrapper from "@/app/context";
import Contact from "@/components/features/contact/contact.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'nl',
  (props: any) => {
    return <BaseLayout appState={props.appState}><Contact appState={props.appState}></Contact></BaseLayout>
  }
);

export default Page;
