import React from "react";
import Carousel from "react-elastic-carousel";
import slide1 from "../../assets/slider/slide1.png";
import slide2 from "../../assets/slider/slide2.png";
import slide3 from "../../assets/slider/slide3.png";
import prev from "../../assets/slider/arrow_left.png";
import next from "../../assets/slider/arrow_right.png";

function CannaSlider(props) {
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
    <div className={"canna_slider"}>
      <Carousel
        itemsToShow={1}
        pagination={false}
        className={"slider"}
        isRTL={false}
        renderArrow={buttons}
       >
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
      </Carousel>
    </div>
  );
}

export default CannaSlider;
