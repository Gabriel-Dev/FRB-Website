import { Main } from "./style";
import { Header } from "../../components/header"
import { Footer } from "../../components/Footer"
import hands from "../../assets/img/hands.png"
import father from "../../assets/img/father.png"
import stethoscope from "../../assets/img/stethoscope.png"
import management from "../../assets/img/management.png"
import selfManagement from "../../assets/img/selfManagement.png"
import apart from "../../assets/img/apart.png"
import BI from "../../assets/img/BI.png"
import medic from "../../assets/img/medic.png"

export const WhoWeAre = () => {
    return (
        <>
            <Header />
            <Main>
                <div className="handsImg">
                    <img src={hands} alt="imagens relacionadas a medicina" />
                </div>
                <div className="whyFRB">
                    <h3>Por que a FRB?</h3>
                    <p>
                        Nossa reputação sólida e expertise no setor são fundamentais para construir confiança.
                    </p>
                    <p>
                        Ao longo dos anos, estabelecemos um nome de confiança como provedores de serviços de proteção financeira.
                    </p>
                    <p>
                        Quando você escolhe nossa empresa, você escolhe a tranquilidade de saber que sua família estará protegida por uma equipe experiente e dedicada.
                    </p>
                </div>
                <div className="fatherImg" >
                    <div>
                        <img src={father} alt="imagem pai e filha" />
                        <p>Nossa prioridade é o seu bem-estar.</p>
                    </div>
                </div>
                <ul className="cardList">
                    <li>
                        <img src={stethoscope} alt="Gestão Integrada de Saúdescópio" />
                        <h3>Gestão Integrada de Saúde</h3>
                        <p>Gestão eficaz realizada com indicadores preditivos para melhorias na utilização das coberturas dos benefícios de saúde.</p>
                    </li>
                    <li>
                        <img src={management} alt="Plataforma de Gestão de Benefícios" />
                        <h3>Plataforma de Gestão de Benefícios</h3>
                        <p>Automatização de processos administrativos. Seu time ganha mais tempo e recursos para focar em estratégias.</p>
                    </li>
                    <li>
                        <img src={selfManagement} alt="Autogestão para Empresas" />
                        <h3>Autogestão para Empresas</h3>
                        <p>Promoção de saúde e bem-estar dos colaboradores. Mais qualidade de vida, motivação e produtividade.</p>
                    </li>
                    <li>
                        <img src={apart} alt="Gestão de Afastados" />
                        <h3>Gestão de Afastados</h3>
                        <p>Organização de dados e controle de indicadores. Transparência e assertividade para eliminar possíveis inconsistências e conter custos.</p>
                    </li>
                    <li>
                        <img src={BI} alt="Graficos" />
                        <h3>BI</h3>
                        <p>Gestão eficaz realizada com indicadores preditivos para melhorias na utilização das coberturas dos benefícios de saúde.</p>
                    </li>
                    <li>
                        <img src={medic} alt="Concierge Médico" />
                        <h3>Concierge Médico</h3>
                        <p>Acolhimento e atendimento humanizado para seus colaboradores. Acompanhamento de casos clínicos complexos.</p>
                    </li>
                </ul>
            </Main>
            <Footer/>
        </>
    )
}