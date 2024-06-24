"use client"
import { Props } from "@/app/context";
import Button from "@/components/widgets/button/button.widget.component";
import { Labels } from "@/services/data/labels/labels.data.service";
import { FaPrint } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


export default function DownloadExportControls(props: {
  labels: Labels,
  exportId: string,
  githubSource: string
}) {

  function printCb() {
    var printContent = document.getElementById(props.exportId)?.innerHTML!;
    var originalContent = window.document.body.innerHTML;
    window.document.body.innerHTML = printContent;
    window.print();
    window.document.body.innerHTML = originalContent; 

  }
  function downloadCb() {
    var printContent = document.getElementById(props.exportId)!;
    var HTML_Width = printContent.scrollWidth;
    var HTML_Height = printContent.scrollHeight;
    var top_left_margin = 40;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.3) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(printContent).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage([PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("de-wit_software.pdf");
        
    });
  }

  return <div>
    <Button className="mb-4" text={props.labels.downloads.print} icon={FaPrint} cb={printCb}></Button>
    <Button className="hidden mb-4" text={props.labels.downloads.download} icon={FaFilePdf} cb={downloadCb}></Button>
    <Button text={props.labels.downloads.source} icon={FaGithub} href={props.githubSource}></Button>
  </div>
  
}