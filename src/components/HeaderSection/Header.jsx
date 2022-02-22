import React, {useState} from 'react';
import soundOn from '../../assets/header/sound_on.webp'
import soundOff from '../../assets/header/sound_off.webp'
import canna from '../../assets/header/canna.webm'
import header_title from '../../assets/header/header_title.webp'
import boombox from '../../assets/header/boombox.webm'
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
                    <video muted width="100%" autoPlay loop >
                        <source src={boombox} type='video/ogg; codecs="theora, vorbis"'/>
                    </video>
                </div>
                <div className={'header_push_canna'}>
                    <video muted width="100%" autoPlay loop >
                        <source src={canna} type='video/ogg; codecs="theora, vorbis"'/>
                    </video>
                </div>
            </div>

        </div>
    );
}

export default Header;
