import React, { useRef } from "react";
import comix_frame from "../../assets/comix/browser/comix_bg.webp";
import bubble_top from "../../assets/comix/browser/bubble_top.webp";
import bubble_top_text from "../../assets/comix/browser/buuble_top_text.webp";
import bubble_bottom from "../../assets/comix/browser/bubble_bottom.webp";
import bubble_bottom_text from "../../assets/comix/browser/bubble_bottom_text.webp";
import canna_pop_up from "../../assets/comix/browser/canna_pop_up.webp";
import canna_pop_up_text from "../../assets/comix/browser/canna_pop_up_text.webp";
import comix_canna_bg from "../../assets/comix/browser/comix_canna_bg.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ComixBrowser({ onLoad }) {
  const bubbleTop = useRef(null);
  const bubbleBottom = useRef(null);
  const cannaPop = useRef(null);

  const bubbleTopAnimation = useIntersectionObserver(bubbleTop, {
    threshold: 0,
    root: null,
    rootMargin: "-50%",
    freezeOnceVisible: true,
  });
  const bubbleBottomAnimation = useIntersectionObserver(bubbleBottom, {
    threshold: 0,
    root: null,
    rootMargin: "-50%",
    freezeOnceVisible: true,
  });

  const cannaPopAnimation = useIntersectionObserver(cannaPop, {
    threshold: 0,
    root: null,
    rootMargin: "-10%",
    freezeOnceVisible: true,
  });

  return (
    <>
      <img className={"comix_frame"} src={comix_frame} alt="" />

      <div className={"bubble_top"} ref={bubbleTop}>
        {onLoad && (
          <div
            className={
              bubbleTopAnimation.isIntersecting ? "fadeInUp" : "opacity"
            }
          >
            <img src={bubble_top} alt="" />
            <img className={"bubble_top_text"} src={bubble_top_text} alt="" />
          </div>
        )}
      </div>
      <div className={"bubble_bottom"} ref={bubbleBottom}>
        {onLoad && (
          <div
            className={
              bubbleBottomAnimation.isIntersecting ? "fadeInUp" : "opacity"
            }
          >
            <img src={bubble_bottom} alt="" />
            <img
              className={"bubble_bottom_text"}
              src={bubble_bottom_text}
              alt=""
            />
          </div>
        )}
      </div>

      <div>
        <img className={"canna_pop_up_text"} src={canna_pop_up_text} alt="" />
      </div>
      <div className={"comix_canna_bg"}>
        <img src={comix_canna_bg} alt="" />
      </div>
      <div className={"canna_pop_up"} ref={cannaPop}>
        {onLoad && (
          <div
            className={`${
              cannaPopAnimation.isIntersecting ? "fadeInLeftBig" : "opacity"
            }`}
          >
            <img src={canna_pop_up} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default ComixBrowser;
