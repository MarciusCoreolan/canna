import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import boombox from "../../assets/footer/mobile/boombox_footer.webp";
import twitter from "../../assets/footer/mobile/twitter_bubble.webp";
import discord from "../../assets/footer/mobile/discord_bubble.webp";
import instagram from "../../assets/footer/mobile/instagram_bubble.webp";
import to_be_continued_bubble from "../../assets/footer/mobile/to_be_continued_bubble.webp";
import canna_to_be from "../../assets/footer/browser/canna_to_be.webp";

function FooterMobile({ onLoad }) {
  const canna = useRef();
  const cannaAnimation = useIntersectionObserver(canna, {
    threshold: 0,
    root: null,
    rootMargin: "0%",
    freezeOnceVisible: true,
  });

  return (
    <div className={"Mfooter"} id={"footer"}>
      <div className={"boombox"}>
        <img src={boombox} alt="" />
      </div>

      <div className={`twitter`}>
        <img src={twitter} alt="twitter" />

        <a
          target="_blank"
          href={"https://twitter.com/CannaSapiensNFT"}
          rel="noreferrer"
        />
      </div>

      <div className={"discord"}>
        <img src={discord} alt="" />
        <a
          target="_blank"
          href={"https://discord.com/invite/KEAnytN9G9"}
          rel="noreferrer"
        />
      </div>
      <div className={"insta"}>
        <img src={instagram} alt="" />
        <a
          target="_blank"
          href={"https://www.instagram.com/canna_sapiens_nft/"}
          rel="noreferrer"
        />
      </div>

      <div className={"to_be_continued"} ref={canna}>
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
  );
}

export default FooterMobile;
