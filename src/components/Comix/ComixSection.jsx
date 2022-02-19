import React from 'react';
import comix from '../../assets/comix/comix_bg.webp'
import bubble_top from '../../assets/comix/bubble_top.webp'
import bubble_bottom from '../../assets/comix/bubble_bottom.webp'
import comix_text from '../../assets/comix/comix_text.webp'

function ComixSection(props) {
    return (
        <div className={'comix_section'}>
            <img src={comix} alt=""/>
            <div className={'bubble_top'}>
                <img src={bubble_top} alt=""/>
            </div>
            <div className={'bubble_bottom'}>
                <img src={bubble_bottom} alt=""/>
            </div>
            <div className={'comix_text'}>
                <img src={comix_text} alt=""/>
            </div>
        </div>
    );
}

export default ComixSection;
