import React, { useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import discord from "../../assets/footer/browser/discord_bubble.webp";
import twitter from "../../assets/footer/browser/twitter_bubble.webp";
import footer_canna from "../../assets/footer/browser/canna_footer.webp";
import insta from "../../assets/footer/browser/instagram_bubble.webp";
import canna_to_be from "../../assets/footer/browser/canna_to_be.webp";
import to_be_continued_bubble from "../../assets/footer/browser/to_be_continued_bubble.webp";

function FooterBrowser() {
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
    <div className={`footer`}>
      <div
        className={`footer_img_container discord ${
          toggle === "disc" && "hovered"
        }`}
      >
        <img src={discord} alt="discord" />
        <a
          target="_blank"
          href={"https://discord.com/invite/KEAnytN9G9"}
          selector={"disc"}
          rel="noreferrer"
          onMouseOut={handleMove}
          onMouseOver={(e) => {
            handleOver(e);
          }}
        ></a>
      </div>
      <div
        className={`footer_img_container twitter ${
          toggle === "twit" && "hovered"
        }`}
      >
        <img src={twitter} alt="twitter" />
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

      <div
        className={`footer_img_container insta ${
          toggle === "insta" && "hovered"
        }`}
      >
        <img src={insta} alt="instagram" />
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

      <div className={"footer_container"}>
        <div className={"canna_container"}>
          <img src={footer_canna} alt="canna" />
        </div>

        <div className={"continued"} ref={canna}>
          <>
            <img
              src={to_be_continued_bubble}
              alt="to be continued"
              className={`canna_bubble ${
                cannaAnimation?.isIntersecting ? "bounceIn" : "opacity"
              }`}
            />
            <img
              className={`canna ${
                cannaAnimation?.isIntersecting ? "fadeInRightBig" : "opacity"
              }`}
              src={canna_to_be}
              alt="to be continued"
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default FooterBrowser;
