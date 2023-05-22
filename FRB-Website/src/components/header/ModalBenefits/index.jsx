import IconTooth from "../../../assets/img/iconLifeBlue.png";
import logoLife from "../../../assets/img/IconBenefits.png";
import logoHearth from "../../../assets/img/IconBenefits2.png";
import { Modal } from "./styled";
import { Link } from "react-router-dom";
export const ModalBenefits = () => {
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
    <Modal>
      <Link
        onClick={() => {
          scrollToSmoothly(700, 4000);
        }}
        to={"/beneficios"}
        className="displayBox"
      >
        <p>Saúde</p>
        <img src={logoLife} alt="Icone de Saúde" />
      </Link>
      <Link onClick={() => {
          scrollToSmoothly(1100, 4000);
        }}
        to={"/beneficios"} className="displayBox">
       <p>Vida</p>
        <img src={IconTooth} alt="Icone Vida" />
      </Link>{" "}
      <Link onClick={() => {
          scrollToSmoothly(1500, 4000);
        }}
        to={"/beneficios"} className="displayBox">
        
        <p>Dental</p>
        <img src={logoHearth} alt="Icone Dental" />
      </Link>
    </Modal>
  );
};
