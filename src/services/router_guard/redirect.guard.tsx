import { redirect } from "next/navigation";
import { FunctionComponent } from "react";

export default function RedirectGuard(
  redirectDestination: () => string | null,
  functionComponent: FunctionComponent
): FunctionComponent {
  return (props, ref) => {
    const destination = redirectDestination();
    if(destination) {
      redirect(destination);
    }
    return functionComponent(props, ref);
  }
}