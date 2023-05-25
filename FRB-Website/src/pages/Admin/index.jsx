
import { Main } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { CreateCompanyModal } from "../../components/Modals/createCompany";
import { RemoveCompanyModal } from "../../components/Modals/removeCompany";
import { EditCompanyModal } from "../../components/Modals/editCompany";
import backLogin from "../../assets/img/IconBackPage.png";
import FRB from "../../assets/img/logoBranca.png";
import buttonPlus from "../../assets/img/Button Plus.png";
import iconEdit from "../../assets/img/Icon Edit.png";
import iconTrash from "../../assets/img/Icon Trash.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";

export const Admin = () => {
  const { CompanyModal, setCompanyModal, ClientModal } = useContext(UserContext)

  return (
    <Main>
      <div className="borderBotton">
        <div className="positionHeader">
          <img
            className="iconBack"
            src={backLogin}
            onClick={() => {
              window.history.back();
            }}
            alt="Menu para voltar a página"
          />
          <img className="imgLogo" src={FRB} alt="Logo da empresa" />
        </div>
      </div>
      <div className="positionNameClient">
        <p className="nameClient">Olá, Flávio de Bem</p>
      </div>
      <div className="positionIntro">
        <div className="positionLayout">
          <p>Clientes</p>
          <div>
            <div className="iconPositionAdd">
              <p>Criar Cliente</p>
              <img src={buttonPlus} alt="Botão de Adicionar Empresa" onClick={()=>{setCompanyModal(<CreateCompanyModal/>)}}/>
            </div>
          </div>
        </div>
        <form className="positionInput">
          <input type="text" placeholder="Digite o nome do cliente" />
          <button className="iconLup">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <section>
        <div className="positionOption">
          <div className="positionBussines">
            <p>Clientes</p>
            <p>Usuários</p>
            <p>CNPJ</p>
            <p>Telefone</p>
            <p>Email</p>
            <p>Editar</p>
            <p>Remover</p>
          </div>
        </div>

        <ul className="positionOption">
          <li className="positionBussines">
            <p>Cliente1</p>
            <p>2</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            <p>xxxxxxxxxx</p>
            <span>
              <img src={iconEdit} alt="Icone Editar" onClick={()=>{setCompanyModal(<EditCompanyModal/>)}}/>
            </span>
            <span>
              <img src={iconTrash} alt="Icone Remover" onClick={()=>{setCompanyModal(<RemoveCompanyModal/>)}} />
            </span>
          </li>
        </ul>
      </section>

      {CompanyModal ? CompanyModal : null}
      {ClientModal ? ClientModal : null}
    </Main>
  );
};
