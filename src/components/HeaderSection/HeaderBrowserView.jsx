import React from "react";
import header_title from "../../assets/header/browser/header_title.webp";
import soundOn from "../../assets/header/sound_on.webp";
import soundOff from "../../assets/header/sound_off.webp";
import work_in_progress from "../../assets/header/browser/work_in_progress.webp";
import cannaWebM from "../../assets/header/browser/canna.webm";
import cannaPng from "../../assets/header/browser/canna.webp";

function HeaderBrowserView({ handleSoundOnOFF, sound, onLoad }) {
  return (
    <>
      <div className={"header_title"}>
        <img src={header_title} alt="" />
      </div>
      <div className={"header_sound"} onClick={handleSoundOnOFF}>

        <img className={`${sound ? 'npOpacity' : 'opacity'}`} src={soundOn} alt="" />

        <img className={`${sound ? 'opacity' : 'npOpacity'}`} src={soundOff} alt="" />

      </div>
      <div className={"work_in_progress"}>
        <img src={work_in_progress} alt="" />
      </div>
      {onLoad ? (
        <div className={"header_main_container"}>
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
          <div className={"canna"}>
            <img src={cannaPng} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderBrowserView;
