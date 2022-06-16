import React, { useState } from "react";
import header_title from "../../assets/header/browser/header_title.webp";
import soundOn from "../../assets/header/browser/sound_on.webp";
import soundOff from "../../assets/header/browser/sound_off.webp";
import work_in_progress from "../../assets/header/browser/work_in_progress.webp";
import cannaWebM from "../../assets/header/browser/canna.webm";
import cannaPng from "../../assets/header/browser/canna.webp";
import { isBrowser } from "react-device-detect";

function HeaderBrowserView({ handleSoundOnOFF, sound, onLoad }) {
  const [shadow, setShadow] = useState(true);

  return (
    <div className={`header ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <div className={"header_title"}>
        <img src={header_title} alt="" />
      </div>
      <div className={"header_sound"} onClick={handleSoundOnOFF}>
        <img
          className={`${sound ? "npOpacity" : "opacity"}`}
          src={soundOn}
          alt=""
        />
        <img
          className={`${onLoad && shadow ? "sound" : ""} ${
            sound ? "opacity" : "npOpacity"
          }`}
          src={soundOff}
          alt=""
          onClick={() => setShadow(false)}
        />
      </div>
      <div className={"work_in_progress"}>
        <img src={work_in_progress} alt="" />
      </div>
      {onLoad ? (
        <div className={"header_main_container"}>
          <div className={"canna"}>
            <video muted width="100%" autoPlay loop poster={cannaPng}>
              <source
                src={cannaWebM}
                type='video/ogg; codecs="theora, vorbis"'
              />
            </video>
          </div>
        </div>
      ) : (
        <div className={"header_main_container"}>
          <div className={"canna"}>
            <img src={cannaPng} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBrowserView;
