import React, { useState } from "react";
import Header from "./HeaderSection/Header";
import ComixSection from "./ComixSection/ComixSection";
import CannaSlider from "./SliderSection/CannaSlider";
import Footer from "./FooterSection/Footer";
import TeamSection from "./TeamSection/TeamSection";

function App(props) {
  const [onLoad, setOnLoad] = useState(false);
  window.onload = function () {
    setOnLoad(true);
  };

  return (
    <div className={"app"}>
      <div className={"dark_border"}> </div>
      <div className={"commix_border"}> </div>

      <div className={"main"}>
        <Header onLoad={onLoad} />
        <ComixSection onLoad={onLoad} />
        <CannaSlider onLoad={onLoad} />
        <TeamSection onLoad={onLoad} />
        <Footer onLoad={onLoad} />
      </div>

      <div className={"commix_border"}> </div>
      <div className={"dark_border"}> </div>
    </div>
  );
}

export default App;
