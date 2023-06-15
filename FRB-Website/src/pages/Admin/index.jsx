import { Main } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { CreateCompanyModal } from "../../components/Modals/createCompany";
import { RemoveCompanyModal } from "../../components/Modals/removeCompany";
import { EditCompanyModal } from "../../components/Modals/editCompany";
import backLogin from "../../assets/img/IconBackPage.webp";
import FRB from "../../assets/img/logoBranca.webp";
import buttonPlus from "../../assets/img/Button Plus.webp";
import { FiEdit } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { AdminContext } from "../../contexts/adminContext/adminContext";

export const Admin = () => {
  const columnNames = [
    "Clientes",
    "Usuários",
    "CNPJ",
    "Telefone",
    "Email",
    "",
    "Editar / Remover",
  ];

  const { CompanyModal, setCompanyModal, ClientModal, user, navigate } =
    useContext(UserContext);
  const { target, setUsers, filter, filterClientOn, filterClient } =
    useContext(AdminContext);

  useEffect(() => {
    user.user_level !== "admin" ? navigate("/") : null;
  }, []);

  return (
    <Main>
      <div className="container">
        <div className="borderBotton">
          <div className="positionHeader">
            <img
              className="iconBack"
              src={backLogin}
              onClick={() => {
                navigate("/areadocliente");
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
                <p>Adicionar Cliente</p>
                <img
                  src={buttonPlus}
                  alt="Botão de Adicionar Empresa"
                  onClick={() => {
                    setCompanyModal(<CreateCompanyModal />);
                  }}
                />
              </div>
            </div>
          </div>
          <form className="positionInput">
            <input
              onChange={(event) => filterClientOn(event)}
              type="text"
              placeholder="Digite o nome do cliente"
            />
            <button type="button" className="iconLup">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <section>
          <div className="positionOption">
            <div className="positionBussines ">
              <p>Clientes</p>
              <p>Usuários</p>
              <p>CNPJ</p>
              <p>Telefone</p>
              <p>Email</p>
              <p>Editar / Remover</p>
            </div>
          </div>
          <ul className="positionOption">
            {target && filter
              ? filter.map((client) => (
                  <li key={client.id} className="positionBussines opacity-2">
                    <p>{client.client_name}</p>
                    <p>{client.users.length}</p>
                    <p>{client.cnpj}</p>
                    <p>{client.tel}</p>
                    <p>{client.client_email}</p>
                    <span>
                      {
                        <FiEdit
                          onClick={() => {
                            setCompanyModal(
                              <EditCompanyModal client={client} />
                            );
                            setUsers(client.users);
                          }}
                        />
                      }
                    </span>
                    <span>
                      {
                        <TbTrash
                          onClick={() => {
                            setCompanyModal(
                              <RemoveCompanyModal
                                name={client.client_name}
                                client_id={client.id}
                              />
                            );
                          }}
                        />
                      }
                    </span>
                  </li>
                ))
              : filterClient.map((client) => (
                  <li key={client.id} className="positionBussines opacity-2">
                    <p>{client.client_name}</p>
                    <p>{client.users.length}</p>
                    <p>{client.cnpj}</p>
                    <p>{client.tel}</p>
                    <p>{client.client_email}</p>
                    <div>
                      <span>
                        {
                          <FiEdit
                            onClick={() => {
                              setCompanyModal(
                                <EditCompanyModal client={client} />
                              );
                              setUsers(client.users);
                            }}
                          />
                        }
                      </span>
                      <span>
                        {
                          <TbTrash
                            onClick={() => {
                              setCompanyModal(
                                <RemoveCompanyModal
                                  name={client.client_name}
                                  client_id={client.id}
                                />
                              );
                            }}
                          />
                        }
                      </span>
                    </div>
                  </li>
                ))}
          </ul>
        </section>
        {CompanyModal ? CompanyModal : null}
        {ClientModal ? ClientModal : null}
      </div>
    </Main>
  );
};
