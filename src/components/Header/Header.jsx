import React from 'react';
import sound from '../../assets/sound on.png'
import canna from '../../assets/PUSHUP_SHADOW_00000.png'
import header_title from '../../assets/header_title.png'
import boombox from '../../assets/BOOMBOX_00000.png'
import work_in_progress from '../../assets/work_in_progress.png'

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'header_title'}>
                <img src={header_title} alt=""/>
            </div>
            <div className={'header_sound'}>
                <img src={sound} alt=""/>
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
