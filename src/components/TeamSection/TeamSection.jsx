import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import TeamSectionBrowser from "./TeamSectionBrowser";
import TeamSectionMobile from "./TeamSectionMobile";

function TeamSection({ onLoad }) {
  return (
    <div>
      <BrowserView>
        <TeamSectionBrowser onLoad={onLoad} />
      </BrowserView>

      <MobileView>
        <TeamSectionMobile />
      </MobileView>
    </div>
  );
}

export default TeamSection;
