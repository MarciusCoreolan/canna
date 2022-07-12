import React from "react";
import Header from "./HeaderSection/Header";
import ComixSection from "./ComixSection/ComixSection";
import RoadMapSection from "./RoadMapSection/RoadMapSection";
import TeamSection from "./TeamSection/TeamSection";
import Footer from "./FooterSection/Footer";

function Main({ onLoad }) {
  return (
    <div className={"root_main"}>
      <div className={"app_container"}>
        <div className={"dark_border"} />
        <div className={"right_commix_border"} />

        <div className={"main"}>
          <Header onLoad={onLoad} />
          <ComixSection />
          <RoadMapSection />
          <TeamSection />
          <Footer />
        </div>

        <div className={"left_commix_border"} />
        <div className={"dark_border"} />
      </div>
      <div className={"bottom_commix_frame"}>
        <div className={"bottom_commix_border"} />
      </div>
    </div>
  );
}

export default Main;
