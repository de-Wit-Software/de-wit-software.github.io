import { Labels } from "@/services/data/labels/labels.data.service";
import { Project } from "@/services/data/projects/projects.data.service";
import { MDXRemote } from "next-mdx-remote/rsc";


export default function ProjectDescription(props: {
  project: Project,
  labels: Labels,
  resume?: boolean
}) {
  return <div className={(props.resume ? "text-base" : "text-lg ") + " sm:text-justify"}><MDXRemote source={props.resume ? props.project.shortDescription : props.project.description} /></div>
}

