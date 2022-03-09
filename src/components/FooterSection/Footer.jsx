import React, { useRef, useState } from "react";
import { isBrowser } from "react-device-detect";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
//========================================================================= browser
import footer_canna from "../../assets/footer/footer_canna.webp";
import discord from "../../assets/footer/discord_bubble.webp";
import twitter from "../../assets/footer/twitter_bubble.webp";
import insta from "../../assets/footer/instagram_bubble.webp";
import canna_to_be from "../../assets/footer/canna_to_be.png";
import to_be_continued_bubble from "../../assets/footer/to_be_continued_bubble.png";

//========================================================================= browser
import M_footer_canna from "../../assets/footer/M_footer_canna.webp";
import M_discord from "../../assets/footer/M_discord_bubble.webp";
import M_twitter from "../../assets/footer/M_twitter_bubble.webp";
import M_insta from "../../assets/footer/M_instagram_bubble.webp";

function Footer({ onLoad }) {
  const canna = useRef();
  const [toggle, setToggle] = useState(false);

  const handleOver = (e) => {
    setToggle(e.target.getAttribute("selector"));
  };
  const handleMove = () => {
    setToggle(false);
  };

  const cannaAnimation = useIntersectionObserver(canna, {
    threshold: 0,
    root: null,
    rootMargin: "0%",
    freezeOnceVisible: true,
  });

  return (
    <div className={`footer ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <div
        className={`footer_img_container discord ${
          toggle === "disc" && "hovered"
        }`}
      >
        <img src={isBrowser ? discord : M_discord} alt="discord" />
        <a
          className={"footer_link"}
          target="_blank"
          href={"https://discord.com/invite/KEAnytN9G9"}
          selector={"disc"}
          rel="noreferrer"
          onMouseOut={handleMove}
          onMouseOver={(e) => {
            handleOver(e);
          }}
        >
          {" "}
        </a>
      </div>
      <div
        className={`footer_img_container twitter ${
          toggle === "twit" && "hovered"
        }`}
      >
        <img src={isBrowser ? twitter : M_twitter} alt="twitter" />
        <a
          target="_blank"
          href={"https://twitter.com/CannaSapiensNFT"}
          selector={"twit"}
          rel="noreferrer"
          onMouseOut={handleMove}
          onMouseOver={(e) => {
            handleOver(e);
          }}
        >
          {" "}
        </a>
      </div>

      <div className={"footer_container canna_container"}>
        <img src={isBrowser ? footer_canna : M_footer_canna} alt="canna" />
      </div>

      <div
        className={`footer_img_container insta ${
          toggle === "insta" && "hovered"
        }`}
      >
        <img src={isBrowser ? insta : M_insta} alt="instagram" />
        <a
          target="_blank"
          href={"https://www.instagram.com/canna_sapiens_nft/"}
          selector={"insta"}
          rel="noreferrer"
          onMouseOut={handleMove}
          onMouseOver={(e) => {
            handleOver(e);
          }}
        >
          {" "}
        </a>
      </div>
      <div className={"continued"}>
        <div className={"canna"} ref={canna}>
          {onLoad && (
            <img
              className={`${
                cannaAnimation.isIntersecting ? "fadeInRightBig" : "opacity"
              }`}
              src={canna_to_be}
              alt="to be continued"
            />
          )}
        </div>
        <div className={"canna_bubble"}>
          {onLoad && (
            <img
              src={to_be_continued_bubble}
              alt="to be continued"
              className={`${
                cannaAnimation.isIntersecting ? "bounceIn" : "opacity"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
