import React from 'react';
import {isBrowser} from "react-device-detect";
//==================================================browser
import comix from '../../assets/comix/comix_bg.webp'
import bubble_top from '../../assets/comix/bubble_top.webp'
import bubble_bottom from '../../assets/comix/bubble_bottom.webp'
import comix_text from '../../assets/comix/comix_text.webp'
//==================================================mobile
import M_comix from '../../assets/comix/M_comix_bg.webp'
import M_bubble_top from '../../assets/comix/M_bubble_top.webp'
import M_bubble_bottom from '../../assets/comix/M_bubble_bottom.webp'
import M_comix_text from '../../assets/comix/M_comix_text.webp'

function ComixSection({onLoad }) {

    return (
        <div className={`comix_section ${ !onLoad && isBrowser ? 'minHeight' : ''}`}>
            <img src={isBrowser ? comix : M_comix} alt=""/>
            <div className={'bubble_top'}>
                <img src={isBrowser ? bubble_top : M_bubble_top} alt=""/>
            </div>
            <div className={'bubble_bottom'}>
                <img src={isBrowser ? bubble_bottom : M_bubble_bottom} alt=""/>
            </div>
            <div className={'comix_text'}>
                <img src={isBrowser ? comix_text : M_comix_text} alt=""/>
            </div>
        </div>
    );
}

export default ComixSection;
