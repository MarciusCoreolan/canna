import React from "react";

import road_map_logo from "../../assets/slider/mobile/roadmap_logo.png";
import seeding_stage from "../../assets/slider/mobile/seeding_stage.png";
import seeding_stage_img from "../../assets/slider/mobile/seeding_stage_img.png";
import vegetative_stage from "../../assets/slider/mobile/vegetative_stage.png";
import vegetative_stage_img from "../../assets/slider/mobile/vegitative_stage_img.png";
import flowering_stage from "../../assets/slider/mobile/flowering_stage.png";
import flowering_stage_img from "../../assets/slider/mobile/flowering_stage_img.png";
import harvest from "../../assets/slider/mobile/harvest.png";
import harvest_img from "../../assets/slider/mobile/harvest_img.png";
import bigger_picture from "../../assets/slider/mobile/bigger_picture.png";
import bigger_picture_img from "../../assets/slider/mobile/bigger_picture_img.png";

function RoadMapMobileView(props) {
  return (
    <div className={"Mroad_map"}>
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
