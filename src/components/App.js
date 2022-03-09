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
    <div>
      <div className={"wrapper"}>
        <div className={"wrapper_commix"}>
          <Header onLoad={onLoad} />
          <ComixSection onLoad={onLoad} />
          <CannaSlider onLoad={onLoad} />
          <TeamSection onLoad={onLoad} />
          <Footer onLoad={onLoad} />
        </div>
      </div>
    </div>
  );
}

export default App;
