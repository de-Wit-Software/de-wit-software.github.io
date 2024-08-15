

export default function Link(props: {
  textStyling?: boolean,
  className?: string,
  id?: string,
  href: string,
  text: string,
  selected: boolean,
  newTab: boolean
}) {
  const buttonClass = `inline-block outline-none cursor-pointer rounded leading-8 font-medium px-4 py-0.5 h-8 min-w-0 min-h-8 border-0 text-portfolio-bg bg-portfolio-accent transition duration-150 ease-in-out hover:bg-portfolio-accent-darker ${props.selected ? 'bg-portfolio-accent-darker underline' : ''} ${props.className || ''}`;
  const textClass = `text-portfolio-accent group-hover:font-bold ${props.selected ? 'underline font-bold' : ''} ${props.className || ''}`;
  const target = props.newTab ? '_blank' : '';
  return <a id={props.id || ''} href={props.href} target={target} className="flex flex-row items-center group">
    <div className={props.textStyling ? textClass : buttonClass}>{props.text}</div>
  </a>
}


