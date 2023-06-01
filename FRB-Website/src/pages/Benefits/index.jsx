import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import { Main } from "./style";
import intro from "../../assets/img/introBenefits.png";
import life from "../../assets/img/IconLife.png";
import health from "../../assets/img/IconHealth.png";
import tooth from "../../assets/img/IconTooth.png";
import iconLifeBlue from "../../assets/img/iconLifeBlue.png";
import { ObservedItem } from "../../components/Observer";
import { useRef } from "react";

export const Benefits = () => {
  const box1 = useRef(false);
  const box2 = useRef(false);
  const box3 = useRef(false);

  return (
    <>
      <Header />
      <Main>
        <div className="positionTextInto">
          <img
            className="imgIntro opacity"
            src={intro}
            alt="Introdução a página"
          />
          <p className="textIntro scale">Englobado os seguintes Benefícios</p>
        </div>
        <div className="positionCard">
          <div className="boxImg cardPosition positionTextBenfits widthbox slideRight ">
            <img className="imgBenefits " src={tooth} alt="Icone de Dente" />
            <p className="textBenefits controlText widthbox">Dental</p>
          </div>
          <div className="widthbox slideDown">
            <div className="boxImgHealth cardPositionHealth positionTextBenfits positionHealth widthbox ">
              <img
                className="imgBenefits marginHealth "
                src={health}
                alt="Icone de Saúde"
              />
              <p className="textBenefits controlText widthbox">Saúde</p>
            </div>
            <div className="whiteBanner widthbox"></div>
            <div className="blueBanner widthbox"> </div>
          </div>
          <div className="boxImg  positionTextBenfits cardPosition widthbox slideLeft">
            <img className="imgBenefits" src={life} alt="Icone de Vida" />
            <p className="textBenefits controlText widthbox">Vida</p>
          </div>
        </div>
        <div>
          <ObservedItem
            onVisible={() => {
              box1.current.className = "boxBlue marginTop slideLeft";
            }}>
              
            <div ref={box1} className="none">
              <div className="positionLayout">
                <img
                  className="imgBenefits marginHealth"
                  src={health}
                  alt="Icone de Saúde"
                />
                <p className="textHealth">Saúde</p>
              </div>
              <div className="positionLayoutText">
                <p className="articleHealth">
                  A saúde é um dos aspectos mais valiosos na vida de qualquer
                  pessoa.
                </p>
                <p className="articleHealth articleHealthFinal">
                  Ao oferecer um Plano de Saúde abrangente para sua equipe, você
                  demonstrará o cuidado que a empresa tem com o bem-estar de
                  cada colaborador.
                </p>
              </div>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              box2.current.className = "boxWhite slideRight";
            }}
          >
            <div ref={box2} className="none">
              <div className="positionLayout">
                <img
                  className="imgBenefits marginHealth"
                  src={iconLifeBlue}
                  alt="Icone de Saúde"
                />
                <p className="textLife">Vida</p>
              </div>
              <div className="positionLayoutText">
                <p className="articleLife">
                  Na jornada da vida, imprevistos podem acontecer, e é nosso
                  dever garantir que seus colaboradores estejam preparados para
                  enfrentá-los.
                </p>
                <p className="articleLife articleLifeFinal">
                  Apresentamos a você nosso incrível Plano de Vida, uma solução
                  completa que proporciona segurança financeira e tranquilidade
                  para seus funcionários.
                </p>
              </div>
            </div>
          </ObservedItem>

          <ObservedItem
            onVisible={() => {
              box3.current.className = "boxBlue slideLeft";
            }}
          >
            <div ref={box3} className="none">
              <div className="positionLayout">
                <img
                  className="imgBenefits marginHealth"
                  src={tooth}
                  alt="Icone de Saúde"
                />
                <p className="textHealth">Dental</p>
              </div>
              <div className="positionLayoutText">
                <p className="articleHealth">
                  Um sorriso saudável reflete a qualidade de vida de uma pessoa.
                </p>
                <p className="articleHealth">
                  Nosso Plano Dental abrange uma série de procedimentos
                  essenciais para a saúde bucal.
                </p>
                <p className="articleHealth articleHealthFinal">
                  Ao oferecer esse benefício, você estará valorizando a saúde de
                  seus colaboradores.
                </p>
              </div>
            </div>
          </ObservedItem>
        </div>
      </Main>
      <Footer />
    </>
  );
};
