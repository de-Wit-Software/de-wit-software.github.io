"use client"
import Button from "@/components/widgets/button/button.widget.component";
import { Labels } from "@/services/data/labels/labels.data.service";
import { ResumeType } from "@/types";
import { FaPrint } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";


export default function DownloadExportControls(props: {
  labels: Labels,
  exportId: string,
  githubSource: string,
  language: string
}) {
  const pdfWebEn = `/dewitsoftware-${ResumeType.WEB}-en.pdf`;
  const pdfMobileEn = `/dewitsoftware-${ResumeType.MOBILE}-en.pdf`;
  const pdfGameEn = `/dewitsoftware-${ResumeType.GAME}-en.pdf`;
  const pdfWebNl = `/dewitsoftware-${ResumeType.WEB}-nl.pdf`;
  const pdfMobileNl = `/dewitsoftware-${ResumeType.MOBILE}-nl.pdf`;
  const pdfGameNl = `/dewitsoftware-${ResumeType.GAME}-nl.pdf`;
  const termsAndConditionsNl = `/dewitsoftware-terms-and-conditions-nl.pdf`;
  const termsAndConditionsEn = `/dewitsoftware-terms-and-conditions-en.pdf`;

  return <div>
    <Button className="block mb-4" text={props.labels.downloads.downloadWebEn} icon={FaFilePdf} download={pdfWebEn}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadMobileEn} icon={FaFilePdf} download={pdfMobileEn}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadGameEn} icon={FaFilePdf} download={pdfGameEn}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadWebNl} icon={FaFilePdf} download={pdfWebNl}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadMobileNl} icon={FaFilePdf} download={pdfMobileNl}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadGameNl} icon={FaFilePdf} download={pdfGameNl}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadTermsAndConditionsNl} icon={FaFilePdf} download={termsAndConditionsNl}></Button>
    <Button className="block mb-4" text={props.labels.downloads.downloadTermsAndConditionsEn} icon={FaFilePdf} download={termsAndConditionsEn}></Button>
    <Button text={props.labels.downloads.source} icon={FaGithub} href={props.githubSource}></Button>
  </div>
  
}