import React, { useRef, useState } from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";

import audio from "../../assets/header/canna_music.mp3";
import HeaderBrowserView from "./HeaderBrowserView";
import HeaderMobileView from "./HeaderMobileView";

function Header({ onLoad }) {
  const [sound, setSound] = useState(false);
  const ref = useRef(null);
  const [flagFirstTIme, setFlagFirstTIme] = useState(true);

  let timestamp = 0;
  function timer() {
    timestamp = getTimestamp();
    setTimeout(timer, 800);
  }
  function setAudio(nowTime, savedTime) {
    ref.current.currentTime = (nowTime - savedTime) / 88;
    ref.current.volume = 0.5;
  }
  function getTimestamp() {
    return Date.now();
  }
  timer();

  const handleSoundOnOFF = () => {
    setSound(!sound);
    if (flagFirstTIme) {
      setAudio(getTimestamp(), timestamp);
      setFlagFirstTIme(false);
    }
  };

  return (
    <div className={`header ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      {onLoad && (
        <audio ref={ref} preload="auto" muted={!sound} autoPlay loop>
          <source src={audio} type="audio/mp3" />
        </audio>
      )}
      {/*================================================================================= Browser */}
      <BrowserView>
        <HeaderBrowserView
          handleSoundOnOFF={handleSoundOnOFF}
          sound={sound}
          onLoad={onLoad}
        />
      </BrowserView>
      {/*======================================================================================= Mobile */}
      <MobileView>
        <HeaderMobileView
          handleSoundOnOFF={handleSoundOnOFF}
          sound={sound}
          onLoad={onLoad}
        />
      </MobileView>
    </div>
  );
}

export default Header;
