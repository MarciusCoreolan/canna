import React from "react";
import Carousel from "react-elastic-carousel";
import {isBrowser} from "react-device-detect";

import prev from "../../assets/slider/arrow_left.webp";
import next from "../../assets/slider/arrow_right.webp";
// ========================================================browser
import slide1 from "../../assets/slider/slide1.webp";
import slide2 from "../../assets/slider/slide2.webp";
import slide3 from "../../assets/slider/slide3.webp";
//=========================================================mobile
import M_slide1 from "../../assets/slider/M_slide1.webp";
import M_slide2 from "../../assets/slider/M_slide2.webp";
import M_slide3 from "../../assets/slider/M_slide3.webp";

function CannaSlider({onLoad}) {
    const buttons =  ({ type, onClick }) => (
      <div onClick={onClick}>
          {type === "PREV" ? (
              <img className={'button_prev'} src={prev} alt="" />
          ) : (
              <img className={'button_next'} src={next} alt="" />
          )}
      </div>
  )

  return (
    <div className={`canna_slider ${ !onLoad && isBrowser ? 'minHeight' : ''}`}>
      <Carousel
        itemsToShow={1}
        pagination={false}
        className={"slider"}
        isRTL={false}
        renderArrow={buttons}
       >
        <img src={isBrowser ? slide1 : M_slide1} alt="" />
        <img src={isBrowser ? slide2 : M_slide2} alt="" />
        <img src={isBrowser ? slide3 : M_slide3} alt="" />
      </Carousel>
    </div>
  );
}

export default CannaSlider;
