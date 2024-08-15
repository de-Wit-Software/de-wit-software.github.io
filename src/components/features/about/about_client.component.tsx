"use client"
import { getTimeDiffString } from "@/libs/time_utils";
import { AppState } from "@/services/state/app/app.state";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function AboutClient(props: {
  appState: AppState,
}) {
  const path = usePathname();

  function setTimeString() {
    const workTime = getTimeDiffString(new Date("Mon Jul 31 2017 22:00:00 GMT+0000"), new Date(), props.appState.labels);
    const timeNode = document.getElementById("time")!;
    timeNode.innerHTML = workTime;
  }

  function setCTAHref() {
    const language = path.includes('/en/') ? 'en' : 'nl';
    const navigation = {
      projects: `/${language}/projects`
    }
    const ctaNode = document.getElementById("CTA")!;
    ctaNode.setAttribute('href', navigation.projects);
  
  }


  useEffect(() => {
    const interval = setInterval(setTimeString, 30000);
    setTimeString();
    setCTAHref();
    return () => {
      clearInterval(interval);
    }
  })
  return (<></>)
}
