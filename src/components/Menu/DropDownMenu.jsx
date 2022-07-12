import React from "react";
import back_to_top from "../../assets/menu_burger/Back_to_top.webp";
import introduction from "../../assets/menu_burger/Introduction.webp";
import roadmap from "../../assets/menu_burger/Roadmap.webp";
import the_team from "../../assets/menu_burger/The_Team.webp";
import social_media from "../../assets/menu_burger/Social_media.webp";

function DropDownMenu({menu}) {
  const scrollTo = (selected) => {
    const element = document.getElementById(selected);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`dropDownMenu ${!menu && 'visibility'}`}>
      <div
        className={"menu_burger_buttons back_to_top"}
        onClick={() => scrollTo("header")}
      >
        <img src={back_to_top} alt="" />
      </div>
      <div
        className={"menu_burger_buttons introduction"}
        onClick={() => scrollTo("commix")}
      >
        <img src={introduction} alt="" />
      </div>
      <div
        className={"menu_burger_buttons roadmap"}
        onClick={() => scrollTo("roadmap")}
      >
        <img src={roadmap} alt="" />
      </div>
      <div
        className={"menu_burger_buttons the_team"}
        onClick={() => scrollTo("the_team")}
      >
        <img src={the_team} alt="" />
      </div>
      <div
        className={"menu_burger_buttons social_media"}
        onClick={() => scrollTo("footer")}
      >
        <img src={social_media} alt="" />
      </div>
    </div>
  );
}

export default DropDownMenu;
