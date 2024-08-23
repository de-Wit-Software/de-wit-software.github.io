
import { Props } from "@/app/context";
import DownloadExportControls from "@/components/widgets/download_export_controls/download_export.widget.component";


export default function Downloads(props: Props) {


  return <div>
    <DownloadExportControls labels={props.appState.labels} exportId="export" language={props.appState.language} githubSource={props.appState.githubSource}></DownloadExportControls>
  </div>
  
}
