import { Main } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import tech from "../../assets/img/tech.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import agility from "../../assets/img/agillity.png";
import flexibility from "../../assets/img/flexibility.png";
import simplicity from "../../assets/img/simplicity.png";
import technology from "../../assets/img/technology.png";
import zeal from "../../assets/img/zeal.png";
import { ObservedItem } from "../../components/Observer";
import { useRef } from "react";

export const OurDifferential = () => {
  const text1 = useRef(false);
  const text2 = useRef(false);
  const text3 = useRef(false);
  const text4 = useRef(false);
  const text5 = useRef(false);

  const img1 = useRef(false);
  const img2 = useRef(false);
  const img3 = useRef(false);
  const img4 = useRef(false);
  const img5 = useRef(false);

  return (
    <>
      <Header />
      <Main>
        <div className="positionView opacity">
          <img className="imgIntro" src={tech} alt="Imagem de introdução" />
        </div>
        <div className="positionCard ">
          <ObservedItem
            onVisible={() => {
              text1.current.className = "positionText slideRight";
            }}
          >
            <div ref={text1} className="none">
              <p className="purple">Agilidade</p>
              <p className="article ">
                Nós entendemos que burocracia e papelada excessiva podem ser
                fontes de frustração. É por isso que desenvolvemos processos
                simplificados que garantem a agilidade na contratação do seguro
                de vida dos seus associados.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem onVisible={() => {
            img1.current.className = "imgCard slideLeft";
          }}>
            <img
              ref={img1}
              className="none"
              src={agility}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
        <div className="positionCard invert">
          <ObservedItem
            onVisible={() => {
              text2.current.className = "positionText slideLeft";
            }}
          >
            <div ref={text2} className="none">
              <p className="purple">Flexibilidade</p>
              <p className="article">
                Entendemos que cada indivíduo e empresa possuem necessidades
                específicas, por isso oferecemos cobertura abrangente e
                flexíves. Você pode personalizar seu plano para se adequar aos
                seus objetivos financeiros e garantir uma proteção adequada.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem onVisible={() => {
            img2.current.className = "imgCard slideRight";
          }}>
            <img
              ref={img2}
              className="none"
              src={flexibility}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
        <div className="positionCard">
          <ObservedItem
            onVisible={() => {
              text3.current.className = "positionText slideRight";
            }}
          >
            <div ref={text3} className="none ">
              <p className="purple">Simplicidade</p>
              <p className="article">
                Tornar o processo de solicitação de seguro de vida simples e sem
                complicações é um compromisso que levamos a sério. Com
                formulários de inscrição simplificados e a conveniência de
                solicitar online, garantimos que você possa obter cobertura de
                forma rápida e eficiente
              </p>
            </div>
          </ObservedItem>
          <ObservedItem onVisible={() => {
            img3.current.className = "imgCard slideLeft";
          }}>
            <img
              ref={img3}
              className="none"
              src={simplicity}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
        <div className="positionCard invert">
          <ObservedItem
            onVisible={() => {
              text4.current.className = "positionText slideLeft";
            }}
          >
            <div ref={text4} className="none">
              <p className="purple">Tecnologia</p>
              <p className="article">
                Possuímos tecnologia de ponta para visualização de dados em
                Power Bi, onde o cliente tem uma visão totalmente aprofundada do
                relatório médico de cada empregado de sua empresa.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem onVisible={() => {
            img4.current.className = "imgCard slideRight";
          }}>
            <img
              ref={img4}
              className="none"
              src={technology}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
        <div className="positionCard">
          <ObservedItem
            onVisible={() => {
              text5.current.className ="positionText slideRight";
            }}
          >
            <div ref={text5} className="none">
              <p className="purple">Zelo</p>
              <p className="article">
                {" "}
                Proteger seus colaboradores e seus respectivos familiares é um
                investimento valioso . Com a FRB você está fazendo mais do que
                apenas escolher uma consutoria, está escolhendo tranquilidade,
                segurança e um parceiro confiável para enfrentar os desafios e
                buscar o melhor custo benefico para a sua empresa.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem onVisible={() => {
            img5.current.className = "imgCard imgzeal slideLeft";
          }}>
            <img
              ref={img5}
              className="none"
              src={zeal}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
      </Main>
      <Footer className="footerBox" />
    </>
  );
};
