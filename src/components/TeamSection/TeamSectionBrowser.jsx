import React, { useState } from "react";
import { isBrowser } from "react-device-detect";

import the_team from "../../assets/team/browser/the_team.webp";
import filip from "../../assets/team/browser/filip.webp";
import filip_bubble from "../../assets/team/browser/filip_bubble.webp";
import filip_title from "../../assets/team/browser/Filip_title.webp";

import leo from "../../assets/team/browser/leo.webp";
import leo_bubble from "../../assets/team/browser/leo_bubble.webp";
import leo_title from "../../assets/team/browser/Leo_title.webp";

import vojta from "../../assets/team/browser/vojta.webp";
import vojta_bubble from "../../assets/team/browser/Vojta_bubble.webp";
import vojta_title from "../../assets/team/browser/Vojta_title.webp";

import ramazan from "../../assets/team/browser/ramazan.webp";
import ramazan_bubble from "../../assets/team/browser/Ramazan_bubble.webp";
import ramazan_title from "../../assets/team/browser/Ramazan_title.webp";

import anna from "../../assets/team/browser/anna.webp";
import anna_bubble from "../../assets/team/browser/Anna_bubble.webp";
import anna_title from "../../assets/team/browser/Anna_title.webp";

import fedor from "../../assets/team/browser/fedor.webp";
import fedor_bubble from "../../assets/team/browser/fedor_bubble.webp";
import fedor_title from "../../assets/team/browser/Michal_title.webp";

function TeamSectionBrowser({ onLoad }) {
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
      <div className={"teamSection_title"}>
        <div className={"the"}>
          <img src={the_team} alt="" />
        </div>
      </div>
      {/*===================================================================================== Main                */}
      <div className={"teamSection_main"}>
        <div className={"teamSection_container"}>
          {/*========================================================================filip            */}
          <div
            className={"filip"}
            onMouseOver={() => {
              mouseOver("filip");
            }}
          >
            <img
              src={filip}
              alt=""
              className={`${"filip" === imgIndex && "hovered"}`}
            />

            <div
              className={`filip_bubble ${
                "filip" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={filip_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={filip_title} alt="" />
                </div>
                <p>
                  The babyfaced, melancholic skipper that manages the futile
                  task of bringing harmony, and identity to all our creative
                  fruits of labour.
                </p>
              </div>
            </div>
          </div>
          {/*======================================================================== Leo            */}
          <div
            className={"leo"}
            onMouseOver={() => {
              mouseOver("leo");
            }}
          >
            <img
              src={leo}
              alt=""
              className={`${"leo" === imgIndex && "hovered"}`}
            />

            <div
              className={`leo_bubble ${
                "leo" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={leo_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={leo_title} alt="" />
                </div>{" "}
                <p>
                  Our all-mighty father, and owner of the braincells responsible
                  for this. He’s also surgeon, he mentions that frequently with
                  much self-satisfaction.
                </p>
              </div>
            </div>
          </div>
          {/*======================================================================== Vojta            */}
          <div
            className={"vojta"}
            onMouseOver={() => {
              mouseOver("vojta");
            }}
          >
            <img
              src={vojta}
              alt=""
              className={`${"vojta" === imgIndex && "hovered"}`}
            />

            <div
              className={`vojta_bubble ${
                "vojta" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={vojta_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={vojta_title} alt="" />
                </div>
                <p>
                  Let’s just say what his dreams are made of must <br />
                  be wild. Anyways, if Leo is the father, then Vojta <br />
                  must be the mother, his imagination and hands <br />
                  have birthed us into existence. <br />
                </p>
              </div>
            </div>
          </div>
          {/*======================================================================== Ramazan            */}
          <div
            className={"ramazan"}
            onMouseOver={() => {
              mouseOver("ramazan");
            }}
          >
            <img
              src={ramazan}
              alt=""
              className={`${"ramazan" === imgIndex && "hovered"}`}
            />

            <div
              className={`ramazan_bubble ${
                "ramazan" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={ramazan_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={ramazan_title} alt="" />
                </div>{" "}
                <p>
                  Our R2-D2 tech-army minion leading go to geek <br />
                  that really likes the sound of his own voice/signals, <br />
                  we wouldn really know our butts from our toes <br />
                  without him, keeps us in line.
                </p>
              </div>
            </div>
          </div>
          {/*======================================================================== Anna            */}
          <div
            className={"anna"}
            onMouseOver={() => {
              mouseOver("anna");
            }}
          >
            <img
              src={anna}
              alt=""
              className={`${"anna" === imgIndex && "hovered"}`}
            />

            <div
              className={`anna_bubble ${
                "anna" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={anna_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={anna_title} alt="" />
                </div>
                <p>
                  She reads at least 3 books a day and uses big <br />
                  words, when she’s not daydreaming <br />
                  or reciting random poetry, she’s our lingo <br />
                  expert.
                </p>
              </div>
            </div>
          </div>
          {/*======================================================================== Anna            */}
          <div
            className={"fedor"}
            onMouseOver={() => {
              mouseOver("fedor");
            }}
          >
            <img
              src={fedor}
              alt=""
              className={`${"fedor" === imgIndex && "hovered"}`}
            />

            <div
              className={`fedor_bubble ${
                "fedor" === imgIndex ? "bounceIn" : "zoomOut"
              }`}
            >
              <img src={fedor_bubble} alt="" />
              <div className={"bubble_text"}>
                <div className={"bubble_text_title"}>
                  <img src={fedor_title} alt="" />
                </div>
                <p>
                  The space a-ranger of our visual representation. <br />
                  If you piss him off, he’ll draw <br />a mean picture of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSectionBrowser;
