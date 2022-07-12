import React from "react";

import road_map_logo from "../../assets/slider/mobile/roadmap_logo.webp";
import seeding_stage from "../../assets/slider/mobile/seeding_stage.webp";
import seeding_stage_img from "../../assets/slider/mobile/seeding_stage_img.webp";
import vegetative_stage from "../../assets/slider/mobile/vegetative_stage.webp";
import vegetative_stage_img from "../../assets/slider/mobile/vegitative_stage_img.webp";
import flowering_stage from "../../assets/slider/mobile/flowering_stage.webp";
import flowering_stage_img from "../../assets/slider/mobile/flowering_stage_img.webp";
import harvest from "../../assets/slider/mobile/harvest.webp";
import harvest_img from "../../assets/slider/mobile/harvest_img.webp";
import bigger_picture from "../../assets/slider/mobile/bigger_picture.webp";
import bigger_picture_img from "../../assets/slider/mobile/bigger_picture_img.webp";

function RoadMapMobileView(props) {
  return (
    <div className={"Mroad_map"} id={"roadmap"}>
      <div className={"road_map_logo"}>
        <img src={road_map_logo} alt="" />
      </div>
      <div className={"stages"}>
        <img src={seeding_stage} alt="" />
        <img src={seeding_stage_img} alt="" />
      </div>
      <div className={"stages"}>
        <img src={vegetative_stage_img} alt="" />
        <img src={vegetative_stage} alt="" />
      </div>
      <div className={"stages"}>
        <img src={flowering_stage} alt="" />
        <img src={flowering_stage_img} alt="" />
      </div>
      <div className={"stages"}>
        <img src={harvest_img} alt="" />
        <img src={harvest} alt="" />
      </div>
      <div className={"stages"}>
        <img src={bigger_picture} alt="" />
        <img src={bigger_picture_img} alt="" />
      </div>
    </div>
  );
}

export default RoadMapMobileView;
