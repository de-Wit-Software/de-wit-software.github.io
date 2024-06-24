import { Labels } from "@/services/data/labels/labels.data.service";
import { Project } from "@/services/data/projects/projects.data.service";
import { MDXRemote } from "next-mdx-remote/rsc";


export default function ProjectDescription(props: {
  project: Project,
  labels: Labels
}) {
  return <div className="text-lg sm:text-justify"><MDXRemote source={props.project.description} /></div>
}

