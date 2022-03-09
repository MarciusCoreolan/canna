import React from 'react';
import M_header_title from "../../assets/header/mobile/M_header_title.webp";
import soundOn from "../../assets/header/sound_on.webp";
import soundOff from "../../assets/header/sound_off.webp";
import M_work_in_progress from "../../assets/header/mobile/M_work_in_progress.webp";
import cannaGif from "../../assets/header/mobile/canna.gif";
import M_canna from "../../assets/header/mobile/M_canna.webp";

function HeaderMobileView({handleSoundOnOFF, sound, onLoad}) {
    return (
        <>
            <div className={"header_title"}>
                <img src={M_header_title} alt="" />
            </div>
            <div className={"header_sound"} onClick={handleSoundOnOFF}>
                <img src={sound ? soundOn : soundOff} alt="" />
            </div>
            <div className={"work_in_progress"}>
                <img src={M_work_in_progress} alt="" />
            </div>
            {onLoad ? (
                <div className={"header_main_container"}>
                    <div className={"canna"}>
                        <img src={cannaGif} alt="" />
                    </div>
                </div>
            ) : (
                <div className={"header_main_container"}>
                    <div className={"canna"}>
                        <img src={M_canna} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default HeaderMobileView;
