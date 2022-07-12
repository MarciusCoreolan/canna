import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "../../assets/loading/logo loading screen lottie file.json";
import loading from "../../assets/loading/Loading.webm";
import {isBrowser} from "react-device-detect";

function Loading({bodyOnload, onLoad}) {

  return (
    <div className={`${isBrowser ?'loading_page' : 'Mloading_page'} ${bodyOnload && onLoad && 'done'}`}>
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
