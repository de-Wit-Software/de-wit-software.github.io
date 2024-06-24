import Link from "@/components/widgets/link/link.widget.component";
import { getTimeString } from "@/libs/time_utils";
import { Labels } from "@/services/data/labels/labels.data.service";
import { Recommendation } from "@/services/data/projects/projects.data.service";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FunctionComponent } from "react";


export default function RecommendationItem(props: {
  recommendation: Recommendation,
  labels: Labels
}) {
  let value: FunctionComponent<{item: Recommendation, labels: Labels}>;
  switch(props.recommendation.type) {
    case 'letter': {
      value = LetterItem;
      break;
    }
    case 'linkedin': {
      value = LinkedInItem;
      break;
    }
  }
  return <div className="flex flex-col-reverse mb-8 xl:flex-row">
    <div className="flex flex-col min-w-60 mt-4 xl:mt-0 mr-8">
      <div className="font-bold">{props.recommendation.name}</div>
      {value({item: props.recommendation, labels: props.labels})}
    </div>
    <div className="text-lg sm:text-justify"><MDXRemote source={props.recommendation.description} /></div>
  </div>
}



function LetterItem(props: {
  item: Recommendation,
  labels: Labels
}) {
  return <div className="flex flex-col">
    <div>{props.labels.projects.recommendation.letter}</div>
    <div>{props.item.position}</div>
    <div>{getTimeString(props.item.date, props.labels, true)}</div>
  </div>
} 

function LinkedInItem(props: {
  item: Recommendation,
  labels: Labels
}) {
  return <div className="flex flex-col">
    <Link dot={false} selected={false} newTab={true} href={props.item.url || ''} text={props.labels.projects.recommendation.linkedin}></Link>
    <div>{props.item.position}</div>
    <div>{getTimeString(props.item.date, props.labels, true)}</div>
  </div>
} 
