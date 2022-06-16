import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import FooterBrowser from "./FooterBrowser";
import FooterMobile from "./FooterMobile";

function Footer({ onLoad }) {
  return (
    <div>
      <BrowserView>
        <FooterBrowser onLoad={onLoad} />
      </BrowserView>

      <MobileView>
        <FooterMobile onLoad={onLoad} />
      </MobileView>
    </div>
  );
}

export default Footer;
