"use client"
import { getTimeDiffString } from "@/libs/time_utils";
import { AppState } from "@/services/state/app/app.state";
import { useEffect } from "react";


export default function AboutClient(props: {
  appState: AppState,
}) {

  function setTimeString() {
    const workTime = getTimeDiffString(new Date("Mon Jul 31 2017 22:00:00 GMT+0000"), new Date(), props.appState.labels);
    const timeNode = document.getElementById("time")!;
    timeNode.innerHTML = workTime;
  }

  useEffect(() => {
    const interval = setInterval(setTimeString, 30000);
    setTimeString();
    return () => {
      clearInterval(interval);
    }
  })
  return (<></>)
}
