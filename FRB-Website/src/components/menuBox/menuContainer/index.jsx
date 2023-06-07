import { MenuStyle } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { ModalBenefits } from "../../header/ModalBenefits";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

import { useState, useEffect } from "react";

export const MenuContainer = () => {
  const navigate = useNavigate()
  const [benefitsBolean, setBenefitsBoelean] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openModal = () => {
    if (benefitsBolean || windowWidth < 768) {
      setBenefitsBoelean(false);
    } else {
      setBenefitsBoelean(true);
    }
  };
  function scrollToSmoothly(pos, time) {
    const currentPos = window.pageYOffset || document.documentElement.scrollTop;
    const distance = pos - currentPos;
    const framesPerSecond = 60;
    const totalTime =
      Math.max(0.1, Math.min(Math.abs(distance) / 1000, 0.8)) * time;
    const increment = distance / (totalTime / (1000 / framesPerSecond));

    let currentPosition = currentPos;
    let currentTime = 0;

    function animateScroll() {
      currentTime += 1000 / framesPerSecond;
      currentPosition += increment;
      window.scrollTo(0, currentPosition);
      if (currentTime < totalTime) {
        requestAnimationFrame(animateScroll);
      }
    }
    animateScroll();
  }
  return (
    <MenuStyle onClick={()=>benefitsBolean?setBenefitsBoelean(false):null }>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={"/"}
      >
        Quem somos
      </Link>
      <Link
        onClick={() => {
          scrollToSmoothly(650,3000);
        }}
        to={"/serviços"}
      >
        Serviços
      </Link>
      {/* <div className="relativeModal">
        <span
          className="positionBenefits"
          onClick={() => {
            openModal()
            windowWidth < 768 ? window.scrollTo(0, 0) : null;
            {windowWidth < 768 ? navigate("/beneficios") : null}
          }}
        >
          Benefícios {windowWidth < 768 ? "" : benefitsBolean?<MdArrowDropUp/>:<MdArrowDropDown />}{" "}
          {benefitsBolean ? <ModalBenefits /> : ""}
        </span>
      </div> */}

      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={"/contato"}
      >
        Contato
      </Link>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={"/areadocliente"}
      >
        Área do cliente
      </Link>
    </MenuStyle>
  );
};
