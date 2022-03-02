import React, { useRef } from "react";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
//==================================================browser
import comix from "../../assets/comix/browser/comix_bg.webp";
import bubble_top from "../../assets/comix/browser/bubble_top.webp";
import bubble_bottom from "../../assets/comix/browser/bubble_bottom.webp";
import comix_text from "../../assets/comix/browser/comix_text.webp";
import canna_pop_up from "../../assets/comix/browser/canna_pop_up.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ComixSection({ onLoad }) {
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
    rootMargin: "-19%",
    freezeOnceVisible: true,
  });

  return (
    <div className={`comix_section ${!onLoad && isBrowser ? "minHeight" : ""}`}>
      <BrowserView>
        <img src={comix} alt="" />

        <div className={"bubble_top"} ref={bubbleTop}>
          {onLoad && (
            <div
              className={
                bubbleTopAnimation.isIntersecting ? "fadeLeft" : 'opacity'}
            >
              <img src={bubble_top} alt="" />
            </div>
          )}
        </div>
        <div className={"bubble_bottom"} ref={bubbleBottom}>
            {onLoad && (
                <div
                    className={
                        bubbleBottomAnimation.isIntersecting ? "fadeInRight" : "opacity"
                    }
                >
                    <img src={bubble_bottom} alt="" />
                </div>
            )}
        </div>

        <div className={"comix_text"}>
          <img src={comix_text} alt="" />
        </div>

        <div className={"canna_pop_up"} ref={cannaPop}>
          {onLoad && (
            <div
              className={`${
                cannaPopAnimation.isIntersecting ? "fadeLeft" : "opacity"
              }`}
            >
              <img src={canna_pop_up} alt="" />
            </div>
          )}
        </div>
      </BrowserView>

      <MobileView>

      </MobileView>
    </div>
  );
}

export default ComixSection;
