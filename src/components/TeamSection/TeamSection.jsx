import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
//=================================================================browser
import the_team from "../../assets/team/browser/the_team.webp";
import anna from "../../assets/team/browser/anna.webp";
import anna_bubble from "../../assets/team/browser/Anna_bubble.png";
import fedor from "../../assets/team/browser/fedor.webp";
import fedor_bubble from "../../assets/team/browser/fedor_bubble.png";
import filip from "../../assets/team/browser/filip.webp";
import filip_bubble from "../../assets/team/browser/filip_bubble.png";
import leo from "../../assets/team/browser/leo.webp";
import leo_bubble from "../../assets/team/browser/leo_bubble.png";
import ramazan from "../../assets/team/browser/ramazan.webp";
import ramazan_bubble from "../../assets/team/browser/Ramazan_bubble.png";
import vojta from "../../assets/team/browser/vojta.webp";
import vojta_bubble from "../../assets/team/browser/Vojta_bubble.png";

//=================================================================mobile
// import M_the from "../../assets/team/browser/the_bubble.webp";
// import M_team_title from "../../assets/team/browser/team_title.webp";

const team = [
  {
    img: filip,
    name: "Filip,",
    profession: "CCO.",
    imgClass: "filip",
    bubbleClass: "filip_bubble",
    bubble: filip_bubble,
    text: "The babyfaced, melancholic skipper that manages the futile task of bringing harmony, and identity to all our creative fruits of labour.",
    subText: "",
  },
  {
    img: leo,
    name: "Leo,",
    profession: "CEO.",
    imgClass: "leo",
    bubbleClass: "leo_bubble",
    bubble: leo_bubble,
    text: "Our all-mighty father, and owner of the braincells responsible for this. He’s also surgeon, he mentions that frequently with much self-satisfaction.",
    subText: "",
  },
  {
    img: vojta,
    name: "Vojta,",
    profession: "The Artist and Creator.",
    imgClass: "vojta",
    bubbleClass: "vojta_bubble",
    bubble: vojta_bubble,
    text: "Let’s just say what his dreams are made of must be wild. Anyways, if Leo is the father, then Vojta must be the mother, his imagination and hands have birthed us into existence. ",
    subText: "",
  },
  {
    img: ramazan,
    name: "R. Т.,",
    profession: "the CTO.",
    imgClass: "ramazan",
    bubbleClass: "ramazan_bubble",
    bubble: ramazan_bubble,
    text: "Our R2-D2 tech-army minion leading go to geek that really likes the sound of his own voice/signals, we wouldn really know our butts from our toes without him, keeps us in line.",
    subText: "",
  },
  {
    img: anna,
    name: "Anna,",
    profession: "Content Editor.",
    imgClass: "anna",
    bubbleClass: "anna_bubble",
    bubble: anna_bubble,
    text: "She reads at least 3 books a day and uses big words, when she’s not daydreaming or reciting random poetry, she’s our lingo expert.",
    subText: "",
  },
  {
    img: fedor,
    name: "Michal,",
    profession: "Lead Designer.",
    imgClass: "fedor",
    bubbleClass: "fedor_bubble",
    bubble: fedor_bubble,
    text: "The space a-ranger of our visual representation. If you piss him off, he’ll draw",
    subText: "a mean picture of you.",
  },
];

function TeamSection({ onLoad }) {
  const [imgIndex, setImgIndex] = useState(false);

  const mouseOver = (index) => {
    setImgIndex(index);
  };

  const mouseOut = () => {
    setImgIndex(false);
  };

  return (
    <div
      className={`teamSection ${!onLoad && isBrowser ? "minHeight" : ""}`}
      onMouseOut={mouseOut}
    >
      <BrowserView>
        <div className={"teamSection_title"}>
          <div className={"the"}>
            <img src={the_team} alt="" />
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
                  onMouseOver={(e) => {
                    mouseOver(index, e);
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    className={`${index === imgIndex && "hovered"}`}
                  />

                  <div
                    className={`${item.bubbleClass} ${
                      index === imgIndex ? "bounceIn" : "zoomOut"
                    }`}
                  >
                    <img src={item.bubble} alt="" />
                    <div className={"bubble_text"}>
                      <div className={"bubble_text_title"}>
                        {item.name}
                        <span className={"team_profession"}>
                          {" "}
                          {item.profession}
                        </span>
                      </div>
                      {item.text}
                      <p>{item.subText}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BrowserView>
      {/*=================================================================================== Mobile*/}
      <MobileView>
        <div className={"teamSection_title"}>
          <div className={"the"}>
            <img src={the_team} alt="" />
          </div>
        </div>
        {/*===================================================================================== Main                */}
        <div className={"teamSection_main"}>
          <div className={"teamSection_container"}>
            {team.map((item, index) => {
              return (
                <div className={`${item.imgClass}`} key={index}>
                  <img src={item.img} alt="" />
                  <div className={`${item.bubbleClass}`}>
                    <img src={item.bubble} alt="" />
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MobileView>
    </div>
  );
}

export default TeamSection;
