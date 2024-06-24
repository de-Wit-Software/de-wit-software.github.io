'use client'
import { ReactNode } from "react";
import Link from "@/components/widgets/link/link.widget.component";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import LanguageSwitch from "../widgets/language_switch/language_switch.widget.component";
import { AppState } from "@/services/state/app/app.state";

export default function BaseLayout({children, appState}: {children: ReactNode, appState: AppState}) {
  const path = usePathname();
  const language = path.includes('/en/') ? 'en' : 'nl';
  const navigation = {
    projects: `/${language}/projects`,
    about: `/${language}/about`,
    contact: `/${language}/contact`,
    skills: `/${language}/skills`,
    downloads: `/${language}/downloads`,
  }
  return (
    <div className="h-full w-full border-0 sm:border-[32px] border-portfolio-bg overflow-hidden flex bg-portfolio-bg relative">

      <Image src={`/corner.svg`} alt="background image" width="800" height="800" className="absolute flex justify-end z-0 bottom-0 flex overflow-hidden left-[670px] 2xl:left-auto right-auto 2xl:right-0"/>

      <div className="p-4 sm:p-8 w-full flex flex-col items-center border-portfolio-accent border relative bg-portfolio-specs overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-portfolio-accent scrollbar-track-portfolio-bg">
        <div className="max-w-7xl w-full flex flex-col 2xl:mr-16 relative">
          <LanguageSwitch className="md:absolute mb-8 md:mb-0 right-0" path={path}></LanguageSwitch>

          <div className="flex flex-row items-center">
            <div className="lg:w-44">
              <div className="max-w-28 lg:max-w-36 hidden sm:block rounded-full border-portfolio-accent border overflow-hidden">
                <Image unoptimized src={`/profile.jpeg`} alt="profile image" width="200" height="200" className="object-contain"/>
              </div>
            </div>
            
            <div className="flex flex-col sm:ml-16">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap">{appState.labels.header.title}</div>
              <div className="text-lg md:text-xl lg:text-3xl">{appState.labels.header.subtitle}</div>
            </div>
          </div>
        
          <div className="mt-8 flex flex-col lg:flex-row">
            <div className="flex flex-col hidden lg:block w-44 min-w-44">
              <Link className="text-2xl leading-10" newTab={false} dot={true} selected={path.includes('/projects')} href={navigation.projects} text={appState.labels.menu.projects}></Link>
              <Link className="text-2xl leading-10" newTab={false} dot={true} selected={path.includes('/about')} href={navigation.about} text={appState.labels.menu.about}></Link>
              <Link className="text-2xl leading-10" newTab={false} dot={true} selected={path.includes('/contact')} href={navigation.contact} text={appState.labels.menu.contact}></Link>
              <Link className="text-2xl leading-10" newTab={false} dot={true} selected={path.includes('/skills')} href={navigation.skills} text={appState.labels.menu.skills}></Link>
              <Link className="text-2xl leading-10" newTab={false} dot={true} selected={path.includes('/downloads')} href={navigation.downloads} text={appState.labels.menu.downloads}></Link>
            </div>
            <div className="flex flex-row block lg:hidden mb-8 flex-wrap">
              <Link className="text-2xl leading-10 mr-6" newTab={false} dot={false} selected={path.includes('/projects')} href={navigation.projects} text={appState.labels.menu.projects}></Link>
              <Link className="text-2xl leading-10 mr-6" newTab={false} dot={false} selected={path.includes('/about')} href={navigation.about} text={appState.labels.menu.about}></Link>
              <Link className="text-2xl leading-10 mr-6" newTab={false} dot={false} selected={path.includes('/contact')} href={navigation.contact} text={appState.labels.menu.contact}></Link>
              <Link className="text-2xl leading-10 mr-6" newTab={false} dot={false} selected={path.includes('/skills')} href={navigation.skills} text={appState.labels.menu.skills}></Link>
              <Link className="text-2xl leading-10" newTab={false} dot={false} selected={path.includes('/export')} href={navigation.downloads} text={appState.labels.menu.downloads}></Link>
            </div>
            <div className="lg:ml-16 max-w-5xl w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}