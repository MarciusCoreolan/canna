import React from 'react';
import sound from '../../assets/sound on.png'
import canna from '../../assets/PUSHUP_SHADOW_00000.png'

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'header_sound'}>
                <img src={sound} alt=""/>
            </div>
            <div className={'header_push_canna'}>
                <img src={canna} alt=""/>
            </div>
        </div>
    );
}

export default Header;
