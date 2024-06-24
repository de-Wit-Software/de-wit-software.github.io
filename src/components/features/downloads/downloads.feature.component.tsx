
import { Props } from "@/app/context";
import DownloadExportControls from "@/components/widgets/download_export_controls/download_export.widget.component";
import Export from "@/components/widgets/export/export.widget.component";


export default function Downloads(props: Props) {


  return <div>
    <div className="opacity-0 fixed w-[700px] h-full pointer-events-none	 z-0 top-0 left-0">
      <Export props={props}  />
    </div>
    <DownloadExportControls labels={props.appState.labels} exportId="export" githubSource={props.appState.githubSource}></DownloadExportControls>
  </div>
  
}
