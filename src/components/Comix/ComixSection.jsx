import React from 'react';
import comix from '../../assets/comix/comix_bg.png'
function ComixSection(props) {
    return (
        <div className={'comix_section'}>
            <img src={comix} alt=""/>
        </div>
    );
}

export default ComixSection;
