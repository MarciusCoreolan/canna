import React from "react";
import footer_canna from "../../assets/footer/footer_canna.png";
import discord from "../../assets/footer/discord bubble.png";
import twitter from "../../assets/footer/twitter bubble.png";
import insta from "../../assets/footer/instagram bubble.png";
import continued from "../../assets/footer/to be continued bubble.png";

function Footer(props) {
  return (
    <div className={"footer"}>
      <div className={"footer_img_container discord"}>
          <a href={'https://discord.com'}>
              <img src={discord} alt="" />
          </a>
      </div>
      <div className={"footer_img_container twitter"}>
          <a href={'https://twitter.com'} >
              <img src={twitter} alt="" />
          </a>
      </div>

      <div className={"footer_container canna_container"}>
        <img src={footer_canna} alt="" />
      </div>

      <div className={"footer_img_container insta"}>
          <a href={'https://www.instagram.com/'} >
              <img src={insta} alt="" />
          </a>
      </div>
      <div className={"footer_img_container continued"}>
        <img src={continued} alt="" />
      </div>
    </div>
  );
}

export default Footer;
