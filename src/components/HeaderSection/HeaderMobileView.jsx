import React, { useState } from "react";
import canna_sapiens_title from "../../assets/header/mobile/canna_sapiens_title.png";
import twitter_logo from "../../assets/header/mobile/twitter_logo.png";
import menu_burger_btn from "../../assets/header/mobile/menu_burger_btn.png";
import canna_logo from "../../assets/header/mobile/canna_logo.png";
import work_in_progress_bubble from "../../assets/header/mobile/work_in_progress_bubble.png";
import cannasapiens_header_title from "../../assets/header/mobile/cannasapiens_header_title.png";
import sound_on from "../../assets/header/mobile/sound_on.png";
import pushup_canna from "../../assets/header/mobile/pushup_canna.png";

import DropDownMenu from "../Menu/DropDownMenu";

function HeaderMobileView({ handleSoundOnOFF, sound, onLoad }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={"Mheader"}>
      <div className={"header_top_panel"}>
        <div className={"title"}>
          <img src={canna_sapiens_title} alt="" />
        </div>
        <div className={"twitter"}>
          <img src={twitter_logo} alt="" />
        </div>

        <div
          className={`menu_burger ${menu && "active"}`}
          onClick={() => setMenu(!menu)}
        >
          <img src={menu_burger_btn} alt="" />
        </div>
      </div>

      {menu && <DropDownMenu />}

      <div>
        <div className={"canna_logo"}>
          <img src={canna_logo} alt="" />
        </div>
        <div className={"work_in_progress"}>
          <img src={work_in_progress_bubble} alt="" />
        </div>
        <div className={"sound"}>
          <img src={sound_on} alt="" />
        </div>
        <div className={"cannasapiens_header_title"}>
          <img src={cannasapiens_header_title} alt="" />
        </div>

        <div className={"pushup_canna"}>
          <img src={pushup_canna} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMobileView;
