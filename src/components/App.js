import React from "react";
import Header from "./HeaderSection/Header";
import ComixSection from "./ComixSection/ComixSection";
import CannaSlider from "./SliderSection/CannaSlider";
import Footer from "./FooterSection/Footer";
import TeamSection from "./TeamSection/TeamSection";

function App(props) {
    const a = []
  return (
    <div>
      <div className={"wrapper"}>
        <Header />
        <ComixSection />
        <CannaSlider />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
