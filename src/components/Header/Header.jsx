import React, {useState} from 'react';
import soundOn from '../../assets/header/sound_on.webp'
import soundOff from '../../assets/header/sound_off.webp'
import canna from '../../assets/header/PUSHUP_SHADOW_00000.gif'
import header_title from '../../assets/header/header_title.webp'
import boombox from '../../assets/header/BOOMBOX_00000.gif'
import work_in_progress from '../../assets/header/work_in_progress.webp'

function Header(props) {
    const [sound, setSound] = useState(true)
    const handleClick = () =>{
        setSound(!sound)
    }
    return (
        <div className={'header'}>
            <div className={'header_title'}>
                <img src={header_title} alt=""/>
            </div>
            <div className={'header_sound'} onClick={handleClick}>
                <img src={sound ? soundOn : soundOff} alt=""/>
            </div>
            <div className={'work_in_progress'}>
                <img src={work_in_progress} alt=""/>
            </div>

            <div className={'header_main_container'}>
                <div className={'boombox'}>
                    <img src={boombox} alt=""/>
                </div>
                <div className={'header_push_canna'}>
                    <img src={canna} alt=""/>
                </div>
            </div>

        </div>
    );
}

export default Header;
