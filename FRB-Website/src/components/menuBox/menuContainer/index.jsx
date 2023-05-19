import { MenuStyle } from "./styled";
import { Link } from "react-router-dom";
import { ModalBenefits } from "../../header/ModalBenefits";
import { MdArrowDropDown } from "react-icons/md";
import { useState, useEffect } from "react";

export const MenuContainer = () => {
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
  return (
    <MenuStyle>
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
          window.scrollTo(0, 0);
        }}
        to={"/nossodiferencial"}
      >
        Nosso diferencial
      </Link>
      <div className="relativeModal">
        <Link
          className="positionBenefits"
          onClick={() => {
            openModal()
            windowWidth < 768 ? window.scrollTo(0, 0) : null;
          }}
          to={windowWidth < 768 ? "/beneficios" : null}
        >
          Benefícios {windowWidth < 768 ? "" : <MdArrowDropDown />}{" "}
          {benefitsBolean ? <ModalBenefits /> : ""}
        </Link>
      </div>

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
