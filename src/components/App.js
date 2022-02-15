import React from 'react';
import Header from "./Header/Header";
import ComixSection from "./Comix/ComixSection";
import CannaSlider from "./CannaSlider/CannaSlider";
import Footer from "./Footer/Footer";

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
