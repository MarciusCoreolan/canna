import React from "react";
import comix from "../../assets/comix/mobile/comix_bg.webp";
import bubble_top from "../../assets/comix/mobile/bubble_top.webp";
import bubble_bottom from "../../assets/comix/mobile/bubble_bottom.webp";
import comix_text from "../../assets/comix/mobile/comix_text.webp";
import canna_pop_up from "../../assets/comix/mobile/canna_pop_up.webp";

function ComixMobile() {
  return (
    <div>
      <img src={comix} alt="" />

      <div className={"bubble_top"}>
        <div>
          <img src={bubble_top} alt="" />
        </div>
      </div>
      <div className={"bubble_bottom"}>
        <div>
          <img src={bubble_bottom} alt="" />
        </div>
      </div>

      <div className={"comix_text"}>
        <img src={comix_text} alt="" />
      </div>

      <div className={"canna_pop_up"}>
        <div>
          <img src={canna_pop_up} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ComixMobile;
