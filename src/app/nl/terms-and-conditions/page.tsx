import ContextWrapper from "@/app/context";
import TermsAndConditions from "@/components/features/terms-and-conditions/termsAndConditions.feature.component";
import BaseLayout from "@/components/layouts/base.layout.component";


const Page = ContextWrapper(
  'nl',
  (props: any) => {
    return <BaseLayout appState={props.appState}>
      <TermsAndConditions appState={props.appState}></TermsAndConditions>
    </BaseLayout>
  }
);

export default Page;
