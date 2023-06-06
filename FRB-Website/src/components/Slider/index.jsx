import { useEffect, useRef } from "react";
import { SliderStyle } from "./styled";
import hands from "../../assets/img/dados.png";
import backhgroundslide from "../../assets/img/backhgroundslide.png";
import backgroundTel from "../../assets/img/BackgroundConfiança.png";
import backgroundHand from "../../assets/img/BackgroundTelemarketing.png";
export const SlideShow = () => {
  const images = [backgroundTel, backgroundHand,hands ];
  const radio1 = useRef(null);
  const radio2 = useRef(null);
  const radio3 = useRef(null);
  
  useEffect(() => {
    let count = 1;
    const intervalId = setInterval(() => {
      count == 3 ? (count = 1) : count++;
      count == 1
        ? (radio1.current.checked = true)
        : count == 2
        ? (radio2.current.checked = true)
        : (radio3.current.checked = true);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <SliderStyle>
      <div className="slides">
        <input ref={radio1} type="radio" name="radio" id="radio1" />
        <input ref={radio2} type="radio" name="radio" id="radio2" />
        <input ref={radio3} type="radio" name="radio" id="radio3" />

        <div className="slide first">
          <img src={images[0]} alt="slide" />
        </div>
        <div className="slide">
          <img src={images[1]} alt="slide" />
        </div>
        <div className="slide">
          <img src={images[2]} alt="slide" />
        </div>

        <div className="navigation-auto">
          <div className="auto1"></div>
          <div className="auto2"></div>
          <div className="auto3"></div>
        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual"></label>
          <label htmlFor="radio2" className="manual"></label>
          <label htmlFor="radio3" className="manual"></label>
        </div>
      </div>
    </SliderStyle>
  );
};
