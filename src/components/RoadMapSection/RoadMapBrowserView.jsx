import React from "react";
import Carousel from "react-elastic-carousel";

import slide1 from "../../assets/slider/browser/slide_1.webp";
import slide_1_1_title from "../../assets/slider/browser/Seeding_stage.webp";
import slide_1_1_text from "../../assets/slider/browser/slide_1_1.webp";
import slide_1_2_title from "../../assets/slider/browser/Vegetative_Stage.webp";
import slide_1_2_text from "../../assets/slider/browser/slide_1_2.webp";

import slide2 from "../../assets/slider/browser/slide_2.webp";
import slide_2_1_title from "../../assets/slider/browser/Flowering_Stage.webp";
import slide_2_1_text from "../../assets/slider/browser/slide_2_1.webp";
import slide_2_2_title from "../../assets/slider/browser/Harvest.webp";
import slide_2_2_text from "../../assets/slider/browser/slide_2_2.webp";

import slide3 from "../../assets/slider/browser/slide_3.webp";
import slide_3_1_title from "../../assets/slider/browser/Bigger_Picture.webp";
import slide_3_1_text from "../../assets/slider/browser/slide_3_1.webp";

import prev from "../../assets/slider/browser/arrow_left.webp";
import next from "../../assets/slider/browser/arrow_right.webp";

function RoadMapBrowserView() {
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
    <div className={`canna_slider`}>
      <Carousel
        itemsToShow={1}
        pagination={false}
        className={"slider"}
        isRTL={false}
        renderArrow={buttons}
      >
        {/*------------------------------------------------------------------slide 1*/}
        <div className={"slide"}>
          <img src={slide1} alt="" />

          <div className={"slide_1_1"}>
            <img className={"slide_1_1_title"} src={slide_1_1_title} alt="" />
            <img className={"slide_1_1_text"} src={slide_1_1_text} alt="" />
          </div>

          <div className={"slide_1_2"}>
            <img className={"slide_1_2_title"} src={slide_1_2_title} alt="" />
            <img className={"slide_1_2_text"} src={slide_1_2_text} alt="" />
          </div>
        </div>
        {/*------------------------------------------------------------------slide 2*/}
        <div className={"slide"}>
          <img src={slide2} alt="" />

          <div className={"slide_2_1"}>
            <img className={"slide_2_1_title"} src={slide_2_1_title} alt="" />
            <img className={"slide_2_1_text"} src={slide_2_1_text} alt="" />
          </div>
          <div className={"slide_2_2"}>
            <img className={"slide_2_2_title"} src={slide_2_2_title} alt="" />
            <img className={"slide_2_2_text"} src={slide_2_2_text} alt="" />
          </div>
        </div>
        {/*------------------------------------------------------------------slide 3*/}
        <div className={"slide"}>
          <img src={slide3} alt="" />

          <div className={"slide_3_1"}>
            <img className={"slide_3_1_title"} src={slide_3_1_title} alt="" />
            <img className={"slide_3_1_text"} src={slide_3_1_text} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default RoadMapBrowserView;
