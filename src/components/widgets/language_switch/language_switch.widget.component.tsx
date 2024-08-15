import Link from "@/components/widgets/link/link.widget.component";


export default function LanguageSwitch(props: {
  path: string,
  className: string
}) {
  const language = props.path.includes('/en/') ? 'en' : 'nl';
  const baseClass = `flex flex-row items-center ${props.className}`;
  
  const switchEnUrl = props.path.replace('/en/', '/nl/');
  const switchNlUrl = props.path.replace('/nl/', '/en/')

  return (
    <div className={baseClass}>
      <Link className="text-2xl leading-10" newTab={false} textStyling={true} selected={language === 'en'} href={switchNlUrl} text="EN"></Link>
      <div className="text-2xl font-bold mx-2">/</div>
      <Link className="text-2xl leading-10" newTab={false} textStyling={true} selected={language === 'nl'} href={switchEnUrl} text="NL"></Link>
    </div>
  ) 
}

