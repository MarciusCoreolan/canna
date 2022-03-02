import React from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";

import ComixBrowser from "./ComixBrowser";
import ComixMobile from "./ComixMobile";

function ComixSection({ onLoad }) {
  return (
    <div className={`comix_section ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <BrowserView>
        <ComixBrowser onLoad={onLoad} />
      </BrowserView>
      <MobileView>
        <ComixMobile onLoad={onLoad} />
      </MobileView>
    </div>
  );
}

export default ComixSection;
