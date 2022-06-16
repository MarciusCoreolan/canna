import React from "react";

import boombox from "../../assets/footer/mobile/boombox_footer.png";
import twitter from "../../assets/footer/mobile/twitter_bubble.png";
import discord from "../../assets/footer/mobile/discord_bubble.png";
import instagram from "../../assets/footer/mobile/instagram_bubble.png";
import to_be_continued from "../../assets/footer/mobile/to_be_continued.png";

function FooterMobile() {
  return (
    <div className={"Mfooter"}>
      <div className={"boombox"}>
        <img src={boombox} alt="" />
      </div>
      <div className={"twitter"}>
        <img src={twitter} alt="" />
      </div>
      <div className={"discord"}>
        <img src={discord} alt="" />
      </div>
      <div className={"insta"}>
        <img src={instagram} alt="" />
      </div>

      <div className={"to_be_continued"}>
        <img src={to_be_continued} alt="" />
      </div>
    </div>
  );
}

export default FooterMobile;
