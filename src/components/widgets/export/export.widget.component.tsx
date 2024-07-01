

import { Props } from '@/app/context';
import About from '@/components/features/about/about.feature.component';
import AboutClient from '@/components/features/about/about_client.component';
import Contact from '@/components/features/contact/contact.feature.component';
import Projects from '@/components/features/projects/projects.feature.component';
import Skills from '@/components/features/skills/skills.feature.component';
import Image from 'next/image'

export default function Export(props: {
    className?: string,
    props: Props
  }
) {
  const className = `${props.className}`
  return (
    <div className={className} id="export">
      <div className="flex flex-row items-center mb-8">
        <div className="lg:w-44">
          <div className="max-w-28 lg:max-w-36 hidden sm:block rounded-full border-portfolio-accent border overflow-hidden">
            <Image unoptimized src={`/profile.webp`} alt="profile image" width="200" height="200" className="object-contain"/>
          </div>
        </div>
        
        <div className="flex flex-col sm:ml-8">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-nowrap">{props.props.appState.labels.header.title}</div>
          <div className="text-lg md:text-xl lg:text-3xl">{props.props.appState.labels.header.subtitle}</div>
        </div>
      </div>
      <About appState={props.props.appState} className="mb-36"></About>
      <AboutClient appState={props.props.appState}></AboutClient>
      <div className="text-2xl">{props.props.appState.labels.menu.contact}</div>
      <Contact appState={props.props.appState} className="mb-16"></Contact>
      <div className="text-2xl">{props.props.appState.labels.menu.skills}</div>
      <Skills appState={props.props.appState} className="mb-44"></Skills>
      <div className="text-2xl">{props.props.appState.labels.menu.projects}</div>
      <Projects appState={props.props.appState} className="mb-16"></Projects>
    </div>
  );
};
