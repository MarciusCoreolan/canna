import React from 'react';
import  the from '../../assets/team/the_bubble.webp'
import  team_title from '../../assets/team/team_title.webp'
import  team from '../../assets/team/team.webp'
import  leo from '../../assets/team/Leo_bubble.webp'
import  flip from '../../assets/team/Filip_bubble.webp'
import  vojta from '../../assets/team/Vojta_bubble.webp'
import  ramazan from '../../assets/team/Ramazan_bubble.webp'
import  anna from '../../assets/team/Anna_bubble.webp'
import  fedor from '../../assets/team/Fedor_bubble.webp'

function TeamSection(props) {
    return (
        <div className={'teamSection'}>
            <div className={'teamSection_title'}>
                <div className={'the'}>
                    <img src={the} alt=""/>
                </div>
                <div className={'team_title'}>
                    <img src={team_title} alt=""/>
                </div>
            </div>
            <div className={'teamSection_main'}>
                <img src={team} alt=""/>

                <div className={'teamSection_main_bubble leo'}>
                    <img src={leo} alt=""/>
                </div>
                <div className={'teamSection_main_bubble flip'}>
                    <img src={flip} alt=""/>
                </div>
                <div className={'teamSection_main_bubble vojta'}>
                    <img src={vojta} alt=""/>
                </div>
                <div className={'teamSection_main_bubble ramazan'}>
                    <img src={ramazan} alt=""/>
                </div>
                <div className={'teamSection_main_bubble anna'}>
                    <img src={anna} alt=""/>
                </div>
                <div className={'teamSection_main_bubble fedor'}>
                    <img src={fedor} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
