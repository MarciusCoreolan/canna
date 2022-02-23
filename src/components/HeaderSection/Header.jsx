import React, { useState } from "react";
import soundOn from "../../assets/header/sound_on.webp";
import soundOff from "../../assets/header/sound_off.webp";
import header_title from "../../assets/header/header_title.webp";
import work_in_progress from "../../assets/header/work_in_progress.webp";
import { BrowserView, MobileView } from "react-device-detect";

import cannaWebM from "../../assets/header/canna.webm";
import boomboxWebM from "../../assets/header/BOOMBOX.webm";

import cannaPng from "../../assets/header/canna.webp";
import boomboxPng from "../../assets/header/boombox.webp";

import cannaGif from "../../assets/header/canna.gif";
import boomboxGif from "../../assets/header/boombox.gif";

function Header(props) {
  const [sound, setSound] = useState(true);
  const [onLoad, setOnLoad] = useState(false);

  const handleClick = () => {
    setSound(!sound);
  };

  window.onload = function () {
    setOnLoad(true);
  };

  return (
    <div className={"header"}>
      <div className={"header_title"}>
        <img src={header_title} alt="" />
      </div>
      <div className={"header_sound"} onClick={handleClick}>
        <img src={sound ? soundOn : soundOff} alt="" />
      </div>
      <div className={"work_in_progress"}>
        <img src={work_in_progress} alt="" />
      </div>

      {onLoad ? (
        <>
          <BrowserView>
            <div className={"header_main_container"}>
              <div className={"boombox"}>
                <video muted width="100%" autoPlay loop>
                  <source
                    src={boomboxWebM}
                    type='video/ogg; codecs="theora, vorbis"'
                  />
                </video>
              </div>
              <div className={"canna"}>
                <video muted width="100%" autoPlay loop>
                  <source
                    src={cannaWebM}
                    type='video/ogg; codecs="theora, vorbis"'
                  />
                </video>
              </div>
            </div>
          </BrowserView>

          <MobileView>
            <div className={"header_main_container"}>
              <div className={"boombox"}>
                <img src={boomboxGif} alt="" />
              </div>
              <div className={"canna"}>
                <img src={cannaGif} alt="" />
              </div>
            </div>
          </MobileView>
        </>
      ) : (
        <div className={"header_main_container"}>
          <div className={"boombox"}>
            <img src={boomboxPng} alt="" />
          </div>
          <div className={"canna"}>
            <img src={cannaPng} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
