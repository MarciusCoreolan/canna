import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
//=================================================================browser
import the from "../../assets/team/browser/the_bubble.webp";
import team_title from "../../assets/team/browser/team_title.webp";
import anna from "../../assets/team/browser/anna.webp";
import anna_bubble from "../../assets/team/browser/anna_bubble.webp";
import fedor from "../../assets/team/browser/fedor.webp";
import fedor_bubble from "../../assets/team/browser/fedor_bubble.webp";
import filip from "../../assets/team/browser/filip.webp";
import filip_bubble from "../../assets/team/browser/filip_bubble.webp";
import leo from "../../assets/team/browser/leo.webp";
import leo_bubble from "../../assets/team/browser/leo_bubble.webp";
import ramazan from "../../assets/team/browser/ramazan.webp";
import ramazan_bubble from "../../assets/team/browser/ramazan_bubble.webp";
import vojta from "../../assets/team/browser/vojta.webp";
import vojta_bubble from "../../assets/team/browser/vojta_bubble.webp";

//=================================================================mobile
// import M_the from "../../assets/team/browser/the_bubble.webp";
// import M_team_title from "../../assets/team/browser/team_title.webp";

function TeamSection({ onLoad }) {
  const team = [
    {
      img: leo,
      imgClass: "leo",
      bubbleClass: "leo_bubble",
      bubble: leo_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      img: filip,
      imgClass: "filip",
      bubbleClass: "filip_bubble",
      bubble: filip_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      img: vojta,
      imgClass: "vojta",
      bubbleClass: "vojta_bubble",
      bubble: vojta_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      img: ramazan,
      imgClass: "ramazan",
      bubbleClass: "ramazan_bubble",
      bubble: ramazan_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      img: anna,
      imgClass: "anna",
      bubbleClass: "anna_bubble",
      bubble: anna_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
    {
      img: fedor,
      imgClass: "fedor",
      bubbleClass: "fedor_bubble",
      bubble: fedor_bubble,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    },
  ];
  const [imgIndex, setImgIndex] = useState(null);

  const mouseOver = (i) => {
    setImgIndex(i);
  };
  const mouseOut = () => {
    setImgIndex(null);
  };

  return (
    <div className={`teamSection ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <BrowserView>
        <div className={"teamSection_title"}>
          <div className={"the"}>
            <img src={the} alt="" />
          </div>
          <div className={"team_title"}>
            <img src={team_title} alt="" />
          </div>
        </div>
        {/*===================================================================================== Main                */}
        <div className={"teamSection_main"}>
          <div className={"teamSection_container"}>
            {team.map((item, index) => {
              return (
                <div
                  className={`${item.imgClass}`}
                  key={index}
                  onMouseOut={mouseOut}
                  onMouseOver={() => {
                    mouseOver(index);
                  }}
                >
                  <img src={item.img} alt="" />
                  <div className={`${item.bubbleClass} ${imgIndex === index ? 'bounceIn' : 'bounceOut'}`}>
                    <img src={item.bubble} alt="" />
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </BrowserView>

      <MobileView></MobileView>
    </div>
  );
}

export default TeamSection;
