"use client"
import Button from "@/components/widgets/button/button.widget.component";
import { Labels } from "@/services/data/labels/labels.data.service";
import { FaPrint } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";


export default function DownloadExportControls(props: {
  labels: Labels,
  exportId: string,
  githubSource: string,
  language: string
}) {
  const pdf = "/dewitsoftware-"+props.language+".pdf"

  return <div>
    <Button className="block mb-4" text={props.labels.downloads.download} icon={FaFilePdf} download={pdf}></Button>
    <Button text={props.labels.downloads.source} icon={FaGithub} href={props.githubSource}></Button>
  </div>
  
}