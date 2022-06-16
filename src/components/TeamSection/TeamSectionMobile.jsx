import React from "react";
import Carousel from "react-elastic-carousel";

import team_title from "../../assets/team/mobile/the_team_title.png";

import filip from "../../assets/team/mobile/filip_M.webp";
import filip_name from "../../assets/team/mobile/Filip_title.webp";
import leo from "../../assets/team/mobile/leo_M.webp";
import team_name from "../../assets/team/mobile/Leo_title.webp";

import prev from "../../assets/slider/browser/arrow_left.webp";
import next from "../../assets/slider/browser/arrow_right.webp";

function TeamSectionMobile() {
  const team = [
    {
      team_img: filip,
      team_name: filip_name,
      team_text:
        "The babyfaced, melancholic skipper that manages the futile task of bringing harmony, and identity to all our creative fruits of labour.",
    },
    {
      team_img: leo,
      team_name: team_name,
      team_text:
        "Our all-mighty father, and owner of the braincells responsible for this. He’s also surgeon, he mentions that frequently with much self-satisfaction.",
    },
  ];

  const buttons = ({ type, onClick }) => (
    <div onClick={onClick}>
      {type === "PREV" ? (
        <img className={"button_prev"} src={prev} alt="" />
      ) : (
        <img className={"button_next"} src={next} alt="" />
      )}
    </div>
  );

  return (
    <div className={"Mteam_section"}>
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
        {team.map((item) => {
          return (
            <div className={"slide"}>
              <div>
                <img src={item.team_img} alt="" />
              </div>
              <div className={"team_message"}>
                <img src={item.team_name} alt="" />
                <p>{item.team_text}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default TeamSectionMobile;
