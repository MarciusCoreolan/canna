import React from 'react';
import Header from "./components/Header/Header";
import ComixSection from "./components/Comix/ComixSection";
import CannaSlider from "./components/CannaSlider/CannaSlider";
import Footer from "./components/Footer/Footer";

function App(props) {
    return (
        <div>
          <Header/>
          <ComixSection/>
          <CannaSlider/>
          <Footer/>
        </div>
    );
}

export default App;
