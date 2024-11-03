import ContextWrapper from "@/app/context";
import TermsAndConditions from "@/components/features/terms-and-conditions/termsAndConditions.feature.component";

const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <TermsAndConditions className='text-sm' appState={props.appState}></TermsAndConditions>

  }
);

export default Page;
