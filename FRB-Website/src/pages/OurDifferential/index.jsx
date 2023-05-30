import { Main } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import tech from "../../assets/img/tech.png";
import agility from "../../assets/img/agillity.png";
import flexibility from "../../assets/img/flexibility.png";
import simplicity from "../../assets/img/simplicity.png";
import technology from "../../assets/img/technology.png";
import zeal from "../../assets/img/zeal.png";
export const OurDifferential = () => {
  return (
    <>
      <Header />
      <Main>
        <img className="imgIntro opacity" src={tech} alt="Imagem de introdução" />
        <div className="positionCard ">
          <div className="positionText slideRight">
            <p className="purple">Agilidade</p>
            <p className="article ">
              Nós entendemos que burocracia e papelada excessiva podem ser
              fontes de frustração. É por isso que desenvolvemos processos
              simplificados que garantem a agilidade na contratação do seguro de
              vida dos seus associados.
            </p>
          </div>
          <img
            className="imgCard slideLeft"
            src={agility}
            alt="Imagem sobre agilidade"
          />
        </div>
        <div className="positionCard invert">
          <div className="positionText slideLeft">
            <p className="purple">Flexibilidade</p>
            <p className="article">
              Entendemos que cada indivíduo e empresa possuem necessidades
              específicas, por isso oferecemos cobertura abrangente e flexíves.
              Você pode personalizar seu plano para se adequar aos seus
              objetivos financeiros e garantir uma proteção adequada.
            </p>
          </div>
          <img
            className="imgCard slideRight"
            src={flexibility}
            alt="Imagem sobre agilidade"
          />
        </div>
        <div className="positionCard">
          <div className="positionText slideRight">
            <p className="purple">Simplicidade</p>
            <p className="article">
              Tornar o processo de solicitação de seguro de vida simples e sem
              complicações é um compromisso que levamos a sério. Com formulários
              de inscrição simplificados e a conveniência de solicitar online,
              garantimos que você possa obter cobertura de forma rápida e
              eficiente
            </p>
          </div>
          <img
            className="imgCard slideLeft"
            src={simplicity}
            alt="Imagem sobre agilidade"
          />
        </div>
        <div className="positionCard invert">
          <div className="positionText slideLeft">
            <p className="purple">Tecnologia</p>
            <p className="article">
              Possuímos tecnologia de ponta para visualização de dados em Power
              Bi, onde o cliente tem uma visão totalmente aprofundada do
              relatório médico de cada empregado de sua empresa.
            </p>
          </div>
          <img
            className="imgCard slideRight"
            src={technology}
            alt="Imagem sobre agilidade"
          />
        </div>
        <div className="positionCard">
          <div className="positionText slideRight">
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
          <img
            className="imgCard imgzeal slideLeft"
            src={zeal}
            alt="Imagem sobre agilidade"
          />
        </div>
      </Main>
      <Footer className="footerBox" />
    </>
  );
};
