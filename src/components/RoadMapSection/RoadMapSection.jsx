import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import RoadMapBrowserView from "./RoadMapBrowserView";
import RoadMapMobileView from "./RoadMapMobileView";

function RoadMapSection({ onLoad }) {
  return (
    <div>
      {/*================================================================================== Browser */}
      <BrowserView>
        <RoadMapBrowserView onLoad={onLoad} />
      </BrowserView>
      {/*================================================================================== Mobile */}
      <MobileView>
        <RoadMapMobileView />
      </MobileView>
    </div>
  );
}

export default RoadMapSection;
