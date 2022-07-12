import React, { useState } from "react";
import canna_sapiens_title from "../../assets/header/mobile/canna_sapiens_title.webp";
import twitter_logo from "../../assets/header/mobile/twitter_logo.webp";
import menu_burger_btn from "../../assets/header/mobile/menu_burger_btn.webp";
import canna_logo from "../../assets/header/mobile/canna_logo.webp";
import work_in_progress_bubble from "../../assets/header/mobile/work_in_progress_bubble.webp";
import cannasapiens_header_title from "../../assets/header/mobile/cannasapiens_header_title.webp";
import sound_on from "../../assets/header/mobile/sound_on.webp";
import pushup_canna from "../../assets/header/mobile/pushup_canna.webp";

import DropDownMenu from "../Menu/DropDownMenu";

function HeaderMobileView({ handleSoundOnOFF, sound, onLoad }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={"Mheader"} id={"header"}>
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

      <DropDownMenu menu={menu}/>

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
