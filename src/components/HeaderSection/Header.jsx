import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";

import soundOn from "../../assets/header/sound_on.webp";
import soundOff from "../../assets/header/sound_off.webp";
import header_title from "../../assets/header/browser/header_title.webp";
import work_in_progress from "../../assets/header/browser/work_in_progress.webp";
// import audio from "../../assets/header/canna_music.mp3";

// =============================================================================== browser import
import cannaWebM from "../../assets/header/browser/canna.webm";
import boomboxWebM from "../../assets/header/browser/BOOMBOX.webm";
import cannaPng from "../../assets/header/browser/canna.webp";
import boomboxPng from "../../assets/header/browser/boombox.webp";
import cannaGif from "../../assets/header/mobile/canna.gif";
import boomboxGif from "../../assets/header/mobile/boombox.gif";
// =============================================================================== Mobile import
import M_boomboxWebP from "../../assets/header/mobile/M_boombox.webp";
import M_header_title from "../../assets/header/mobile/M_header_title.webp";
import M_work_in_progress from "../../assets/header/mobile/M_work_in_progress.webp";
import M_canna from "../../assets/header/mobile/M_canna.webp";

function Header({ onLoad }) {
  const [sound, setSound] = useState(true);

  const handleClick = () => {
    setSound(!sound);
  };

  return (
    <div className={`header ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      {/*<audio controls autoPlay loop>*/}
      {/*    <source src={audio} type="audio/mp3"/>*/}
      {/*</audio>*/}
      {/*================================================================================= Browser */}
      <BrowserView>
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
      </BrowserView>
      {/*======================================================================================= Mobile */}
      <MobileView>
        <div className={"header_title"}>
          <img src={M_header_title} alt="" />
        </div>
        <div className={"header_sound"} onClick={handleClick}>
          <img src={sound ? soundOn : soundOff} alt="" />
        </div>
        <div className={"work_in_progress"}>
          <img src={M_work_in_progress} alt="" />
        </div>
        {onLoad ? (
          <div className={"header_main_container"}>
            <div className={"boombox"}>
              <img src={boomboxGif} alt="" />
            </div>
            <div className={"canna"}>
              <img src={cannaGif} alt="" />
            </div>
          </div>
        ) : (
          <div className={"header_main_container"}>
            <div className={"boombox"}>
              <img src={M_boomboxWebP} alt="" />
            </div>
            <div className={"canna"}>
              <img src={M_canna} alt="" />
            </div>
          </div>
        )}
      </MobileView>
    </div>
  );
}

export default Header;
