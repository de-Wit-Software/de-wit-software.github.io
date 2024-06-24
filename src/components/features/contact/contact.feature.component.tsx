import { ContactInfoItem } from "@/services/data/contact/contact.data.service";
import { AppState } from "@/services/state/app/app.state";
import { FunctionComponent } from "react";

export default function Contact(props: {
  appState: AppState,
  className?: string
}) {
  const className = `text-lg ${props.className}`;

  const contactInfo = props.appState.contactInfo;
  return <div className={className}>{
    contactInfo.map((item) => {
      let value: FunctionComponent<{item: ContactInfoItem}>;
      switch(item.display) {
        case 'email': {
          value = EmailItem;
          break;
        }
        case 'href': {
          value = HrefItem;
          break;
        }
        default: {
          value = PlainItem;
          break;
        }
      }

      return <div key={item.label} className="flex flex-col sm:flex-row mb-2">
        <div className="min-w-40 font-bold">{item.label}</div>
        {value({item})}
      </div>
    })
  }</div>
  
}

function EmailItem(props: {
  item: ContactInfoItem
}) {
  const href=`mailto: ${props.item.displayData}`;
  return <a className="text-portfolio-accent hover:font-bold" href={href}>{props.item.value}</a>
}

function HrefItem(props: {
  item: ContactInfoItem
}) {
  return <a className="text-portfolio-accent hover:font-bold" href={props.item.displayData} target="_blank">{props.item.value}</a>
} 

function PlainItem(props: {
  item: ContactInfoItem
}) {
  return <div>{props.item.value}</div>
} 



