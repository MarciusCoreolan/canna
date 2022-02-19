import React, { useState } from "react";
import footer_canna from "../../assets/footer/footer_canna.webp";
import discord from "../../assets/footer/discord_bubble.webp";
import twitter from "../../assets/footer/twitter_bubble.webp";
import insta from "../../assets/footer/instagram_bubble.webp";
import continued from "../../assets/footer/to_be_continued_bubble.webp";

function Footer(props) {
  const [toggle, setToggle] = useState(false);

  const active = {
    insta: { bottom: `${toggle === "insta" ? "41.7%" : "42%"}` },
    discord: { bottom: `${toggle === "disc" ? "34.7%" : "35%"}` },
    twitter: { bottom: `${toggle === "twit" ? "17.7%" : "18%"}` },
  };

  const handleClick = (e) => {
    setToggle(e.target.getAttribute("selector"));
    setTimeout(() => {
      setToggle(false);
    }, [100]);
  };
  const handleMove = (e) =>{
      setToggle(e.target.getAttribute("selector"));
  }

  return (
    <div className={"footer"} onMouseUp={()=>setToggle(false)}
    >
      <div className={"footer_img_container discord"} style={active.discord}>
        <img src={discord} alt="discord"/>
        <a
          className={'footer_link'}
          target="_blank"
          href={"https://discord.com/invite/KEAnytN9G9"}
          selector={"disc"}
          rel="noreferrer"
          onMouseDown={(e)=>handleMove(e)}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {" "}
        </a>
      </div>
      <div className={"footer_img_container twitter"} style={active.twitter}>
        <img src={twitter} alt="twitter" />
        <a
          target="_blank"
          href={"https://twitter.com/CannaSapiensNFT"}
          selector={"twit"}
          rel="noreferrer"
          onMouseDown={(e)=>handleMove(e)}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {" "}
        </a>
      </div>

      <div className={"footer_container canna_container"}>
        <img src={footer_canna} alt="canna" />
      </div>

      <div className={"footer_img_container insta"} style={active.insta}>
        <img src={insta} alt="instagram" />
        <a
          target="_blank"
          href={"https://www.instagram.com/canna_sapiens_nft/"}
          selector={"insta"}
          rel="noreferrer"
          onMouseDown={(e)=>handleMove(e)}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {" "}
        </a>
      </div>
      <div className={"footer_img_container continued"}>
        <img src={continued} alt="to be continued" />
      </div>
    </div>
  );
}

export default Footer;
