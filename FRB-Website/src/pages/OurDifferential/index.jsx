import { Main } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import tech from "../../assets/img/tech.png";
import cardPME from "../../assets/img/cardPME.png";
import cardEmpresarial from "../../assets/img/cardEmpresarial.png";
import cardOdontologico from "../../assets/img/cardOdontologico.png";
import cardVida from "../../assets/img/cardVida.png";
import cardAutomovel from "../../assets/img/cardAutomovel.png";
import cardAtendimento from "../../assets/img/cardAtendimento.png";
import cardGestao from "../../assets/img/cardGestao.png";
import cardBI from "../../assets/img/cardBI.png";
import cardResidencial from "../../assets/img/cardResidencial.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import agility from "../../assets/img/agiliserv.png";
import flexibility from "../../assets/img/flexibility.png";
import simplicity from "../../assets/img/simplicity.png";
import acessiblitypic from "../../assets/img/acessiblitypic.png";
import technology from "../../assets/img/relacion.png";
import zeal from "../../assets/img/excelencia.png";
import proactive from "../../assets/img/proactive.png";
import { ObservedItem } from "../../components/Observer";
import { useRef } from "react";

export const OurDifferential = () => {
  const text1 = useRef(false);
  const text2 = useRef(false);
  const text3 = useRef(false);
  const text4 = useRef(false);
  const text5 = useRef(false);
  const text6 = useRef(false);

  const img1 = useRef(false);
  const img2 = useRef(false);
  const img3 = useRef(false);
  const img4 = useRef(false);
  const img5 = useRef(false);
  const img6 = useRef(false);
  return (
    <>
      <Header />
      <Main>
        <div className="positionView opacity">
          <img className="imgIntro" src={tech} alt="Imagem de introdução" />
        </div>
        <ul className="ulList">
          <li>
            <img src={cardPME} alt="PME" />
            <div>
            <p>PME</p>
            
            </div>
          </li>
          <li>
            <img src={cardEmpresarial} alt="Empresarial" />
            <div>
            <p>Empresarial</p>
            
            </div>
          </li>
          <li>
            <img src={cardOdontologico} alt="Odontológico" />
            <div>
            <p>Odontológico</p>
            
            </div>
          </li>  <li>
            <img src={cardVida} alt="Vida / Pronteção financeira" />
            <div>
            <p>Vida / Pronteção Financeira</p>
            
            </div>
          </li>  <li>
            <img src={cardAutomovel} alt="Automóvel" />
            <div>
            <p>Automóvel</p>
            
            </div>
          </li>  <li>
            <img src={cardAtendimento} alt="Atendimento in Company" />
            <div>
            <p>Atendimento in Company</p>
            
            </div>
          </li>  <li>
            <img src={cardGestao} alt="Gestão de Risco em Saúde" />
            <div>
            <p>Gestão de Risco em Saúde</p>
            
            </div>
          </li>  <li>
            <img src={cardBI} alt="Bussiness Inteligence" />
            <div>
            <p>Bussiness Inteligence</p>
            
            </div>
          </li>  <li>
            <img src={cardResidencial} alt="Residencial" />
            <div>
            <p>Residencial</p>
            
            </div>
          </li>
          
        </ul>
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
          <ObservedItem
            onVisible={() => {
              img1.current.className = "imgCard slideLeft";
            }}
          >
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
              <p className="purple">Acessibilidade</p>
              <p className="article">
                Entendemos que cada indivíduo e empresa possuem necessidades
                específicas, por isso oferecemos cobertura abrangente e
                flexíves. Você pode personalizar seu plano para se adequar aos
                seus objetivos financeiros e garantir uma proteção adequada.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              img2.current.className = "imgCard slideRight";
            }}
          >
            <img
              ref={img2}
              className="none"
              src={acessiblitypic}
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
              <p className="purple">Confiança</p>
              <p className="article">
                Valorizamos a confiança como base para todos os nossos
                relacionamentos, cultivando a transparência e a integridade.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              img3.current.className = "imgCard slideLeft";
            }}
          >
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
              <p className="purple">Relacionamento</p>
              <p className="article">
                Priorizamos relacionamentos duradouros, baseados no respeito, na
                empatia e no comprometimento com as necessidades e objetivos dos
                clientes.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              img4.current.className = "imgCard slideRight";
            }}
          >
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
              text5.current.className = "positionText slideRight";
            }}
          >
            <div ref={text5} className="none">
              <p className="purple">Excelência</p>
              <p className="article">
                {" "}
                Buscamos a excelência em nossos serviços, entregando soluções
                personalizadas e de qualidade para garantir a proteção e a
                tranquilidade dos clientes.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              img5.current.className = "imgCard imgzeal slideLeft";
            }}
          >
            <img
              ref={img5}
              className="none"
              src={zeal}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
        <div className="positionCard invert">
          <ObservedItem
            onVisible={() => {
              text6.current.className = "positionText slideLeft";
            }}
          >
            <div ref={text6} className="none">
              <p className="purple">Proatividade</p>
              <p className="article">
                Somos proativos em antecipar desafios e oferecer soluções
                inovadoras, adaptando-nos às necessidades em constante evolução
                dos nossos clientes.
              </p>
            </div>
          </ObservedItem>
          <ObservedItem
            onVisible={() => {
              img6.current.className = "imgCard slideRight";
            }}
          >
            <img
              ref={img6}
              className="none"
              src={proactive}
              alt="Imagem sobre agilidade"
            />
          </ObservedItem>
        </div>
      </Main>
      <Footer className="footerBox" />
    </>
  );
};
