import React from "react";
import Carousel from "react-elastic-carousel";
import { isBrowser } from "react-device-detect";

import prev from "../../assets/slider/arrow_left.webp";
import next from "../../assets/slider/arrow_right.webp";
// ========================================================browser
import slide1 from "../../assets/slider/slide_1.png";
import slide2 from "../../assets/slider/slide_2.png";
import slide3 from "../../assets/slider/slide_3.png";
import slide1_text from "../../assets/slider/slide1_text.png";
import slide2_text from "../../assets/slider/slide2_text.png";
import slide3_text from "../../assets/slider/slide3_text.png";

//=========================================================mobile
import M_slide1 from "../../assets/slider/M_slide1.webp";
import M_slide2 from "../../assets/slider/M_slide2.webp";
import M_slide3 from "../../assets/slider/M_slide3.webp";

function CannaSlider({ onLoad }) {
  const buttons = ({ type, onClick }) => (
    <div onClick={onClick}>
      {type === "PREV" ? (
        <img className={"button_prev"} src={prev} alt="" />
      ) : (
        <img className={"button_next"} src={next} alt="" />
      )}
    </div>
  );

  return (
    <div className={`canna_slider ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <Carousel
        itemsToShow={1}
        pagination={false}
        className={"slider"}
        isRTL={false}
        renderArrow={buttons}
      >
        <div className={"slide"}>
          <img src={isBrowser ? slide1 : M_slide1} alt="" />
          <img className={"slide1_text"} src={slide1_text} alt="" />
        </div>

        <div className={"slide"}>
          <img src={isBrowser ? slide2 : M_slide2} alt="" />
          <img className={"slide2_text"} src={slide2_text} alt="" />
        </div>

        <div className={"slide"}>
          <img src={isBrowser ? slide3 : M_slide3} alt="" />
          <img className={"slide3_text"} src={slide3_text} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default CannaSlider;
