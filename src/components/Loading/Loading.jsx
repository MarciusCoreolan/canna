import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "../../assets/loading/logo loading screen lottie file.json";
import loading from "../../assets/loading/Loading.webm";

function Loading(props) {
  return (
    <div className={"loading_page"}>
      <Player autoplay loop src={logo} className={"preloader__logo"}>
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>

      <video muted width="100%" autoPlay loop className={"preloader__loading"}>
        <source src={loading} type='video/ogg; codecs="theora, vorbis"' />
      </video>
    </div>
  );
}

export default Loading;
