
import { Props } from "@/app/context";
import About from "../about/about.feature.component";
import AboutClient from "../about/about_client.component";
import Contact from "../contact/contact.feature.component";
import Projects from "../projects/projects.feature.component";
import Skills from "../skills/skills.feature.component";
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ResumeType } from "@/types";


export default function Resume(props: {
  type: ResumeType
} & Props) {

  const email = props.appState.email;
  const linkedin = props.appState.linkedIn;
  const address = props.appState.address;

  return <div id="export" className="mx-8">
    <div className="flex flex-row justify-between items-center mb-4">
        
      <div className="flex flex-col sm:mr-8 flex-grow">
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap">{props.appState.labels.header.title}</div>
        <div className="text-lg md:text-xl lg:text-3xl">{props.appState.labels.header.subtitle}</div>
        <div className="flex flex-row">
          <a className="text-portfolio-accent hover:font-bold mr-6" href={`mailto: ${email}`}>{email}</a>
          <a className="text-portfolio-accent hover:font-bold mr-6" href={`https://www.${linkedin}`}>{linkedin}</a>
          <span>{address}</span>
        </div>
      </div>
      <div className="lg:w-44">
        <div className="max-w-28 lg:max-w-36 hidden sm:block rounded-full border-4 border-portfolio-accent border overflow-hidden">
          <Image unoptimized src={`/profile.webp`} alt="profile image" width="200" height="200" className="object-contain"/>
        </div>
      </div>
    
    </div>

    <div className="flex flex-col">
      <div className="mb-4">
        <div className="text-base font-bold"><MDXRemote source={props.appState.labels.menu.about} /></div>
        <div className="text-base"><MDXRemote source={props.appState.aboutMeShortText[props.type]} /></div>

      </div>
      <div className="">
        <Skills appState={props.appState} resumeType={props.type} className="flex flex-row w-full"></Skills>

      </div>
    </div>
    <Projects appState={props.appState} resumeType={props.type}></Projects>
  </div>
  
}
