

export default function Link(props: {
  dot: boolean,
  className?: string,
  href: string,
  text: string,
  selected: boolean,
  newTab: boolean
}) {
  const textClass = `text-portfolio-accent group-hover:font-bold ${props.selected ? 'underline font-bold' : ''} ${props.className || ''}`;
  const dotClass = `w-1.5 min-w-1.5 h-1.5 bg-portfolio-accent mr-4 rounded-full ${props.dot ? 'block' : 'hidden'}`;
  const target = props.newTab ? '_blank' : '';
  return <a href={props.href} target={target} className="flex flex-row items-center group">
    <div className={dotClass}></div>
    <div className={textClass}>{props.text}</div>
  </a>
}

