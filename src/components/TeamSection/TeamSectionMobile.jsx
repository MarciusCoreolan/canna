import React from "react";
import Carousel from "react-elastic-carousel";

import team_title from "../../assets/team/mobile/the_team_name.png";

import filip from "../../assets/team/mobile/filip_M.webp";
import filip_name from "../../assets/team/mobile/filip_name.webp";
import leo from "../../assets/team/mobile/leo_M.webp";
import leo_name from "../../assets/team/mobile/leo_name.webp";
import vojta from "../../assets/team/mobile/vojta_M.webp";
import vojta_name from "../../assets/team/mobile/vojta_name.webp";
import ramazan from "../../assets/team/mobile/ramazan_M.webp";
import ramazan_name from "../../assets/team/mobile/ramazan_name.webp";
import anna from "../../assets/team/mobile/anna_M.webp";
import anna_name from "../../assets/team/mobile/anna_name.webp";
import fedor from "../../assets/team/mobile/fedor_M.webp";
import fedor_name from "../../assets/team/mobile/fedor_name.webp";

import prev from "../../assets/slider/browser/arrow_left.webp";
import next from "../../assets/slider/browser/arrow_right.webp";

function TeamSectionMobile() {
  const buttons = (
    { type, onClick } //____________________________button display setting
  ) => (
    <div onClick={onClick}>
      {type === "PREV" ? (
        <img className={"button_prev"} src={prev} alt="" />
      ) : (
        <img className={"button_next"} src={next} alt="" />
      )}
    </div>
  );

  return (
    <div className={"Mteam_section"} id={"the_team"}>
      <div className={"team_title"}>
        <img src={team_title} alt="" />
      </div>

      <Carousel
        itemsToShow={1}
        pagination={false}
        className={"slider"}
        isRTL={false}
        renderArrow={buttons}
      >
        {/*////////////////////////////////////////////////////////////////////slide filip*/}
        <div className={"slide"}>
          <div>
            <img src={filip} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"filip"} src={filip_name} alt="" />
            <p>
              The babyfaced, melancholic skipper <br /> that manages the futile
              task of bringing <br /> harmony, and identity to all our creative{" "}
              <br /> fruits of labour.
            </p>
          </div>
        </div>
        {/*////////////////////////////////////////////////////////////////////////slide leo*/}
        <div className={"slide"}>
          <div>
            <img src={leo} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"leo"} src={leo_name} alt="" />
            <p>
              Our all-mighty father, and owner of the braincells <br />{" "}
              responsible for this. He’s also a surgeon, he mentions <br /> that
              frequently with much self-satisfaction.
            </p>
          </div>
        </div>
        {/*//////////////////////////////////////////////////////////////////////////slide anna*/}
        <div className={"slide"}>
          <div>
            <img src={vojta} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"vojta"} src={vojta_name} alt="" />
            <p>
              Let’s just say what his dreams are made of must <br /> be wild.
              Anyways, if Leo is the father, then Vojta <br /> must be the
              mother, his imagination and hands <br /> have birthed us into
              existence.
            </p>
          </div>
        </div>
        {/*//////////////////////////////////////////////////////////////////////////////slide ramazan*/}
        <div className={"slide"}>
          <div>
            <img src={ramazan} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"ramazan"} src={ramazan_name} alt="" />
            <p>
              Our R2-D2 tech-army minion leading go to geek <br /> that really
              likes the sound of his own voice/signals, <br /> we wouldn’t
              really know our butts from our toes <br /> without him, keeps us
              in line.
            </p>
          </div>
        </div>
        {/*/////////////////////////////////////////////////////////////////////////////////slide anna*/}
        <div className={"slide"}>
          <div>
            <img src={anna} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"anna"} src={anna_name} alt="" />
            <p>
              She reads at least 3 books a day and uses big <br /> words, when
              she’s not daydreaming <br /> or reciting random poetry, she’s our
              lingo <br /> expert.
            </p>
          </div>
        </div>
        {/*///////////////////////////////////////////////////////////////////////////////////slide fedor*/}
        <div className={"slide"}>
          <div>
            <img src={fedor} alt="" />
          </div>
          <div className={"team_message"}>
            <img className={"fedor"} src={fedor_name} alt="" />
            <p>
              The space a-ranger of our visual representation. <br /> If you
              piss him off, he’ll draw <br /> a mean picture of you.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default TeamSectionMobile;
