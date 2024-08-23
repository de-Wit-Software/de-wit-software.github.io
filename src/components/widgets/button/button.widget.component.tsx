import { IconType } from "react-icons";


export default function Button(props: {
  icon: IconType,
  text: string,
  cb?: () => void,
  href?: string,
  className?: string,
  download?: string
}) {

  if(props.cb) {
    return <div className={props.className ?? ''} onClick={props.cb}>
      <BaseButton text={props.text} icon={props.icon}></BaseButton>
    </div>
  }
  if(props.href) {
    return <a className={props.className ?? ''} href={props.href} target="_blank">
      <BaseButton text={props.text} icon={props.icon}></BaseButton>
    </a>
  }
  if(props.download) {
    return <a className={props.className ?? ''} href={props.download} download>
      <BaseButton text={props.text} icon={props.icon}></BaseButton>
    </a>
  }
}

function BaseButton(props: {
  text: string,
  icon: IconType
}) {
  return <div className="text-portfolio-accent cursor-pointer	hover:font-bold text-xl flex flex-row items-center" >
    <props.icon className="mr-2" size={24}></props.icon>
    {props.text}
  </div>
} 
