import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { EditCompany } from "./editCompanyStyle";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { CreateClientModal } from "../../components/Modals/createClient";
import { RemoveClientModal } from "../../components/Modals/removeClient";
import { EditClientModal } from "../../components/Modals/editClient";

export const EditCompanyModal = () => {
  const { setClientModal } = useContext(UserContext)

  return (
    <EditCompany>
      <ModalBackground size="editCompany">
        <div>
          <form>
            <Input
              name="Nome do Cliente"
              type="text"
              placeholder="Atualize o nome do cliente"
              label="Nome do Cliente"
            />
            <Input
              name="CNPJ"
              type="text"
              placeholder="Atualize o cnpj do cliente"
              label="CNPJ"
            />
            <Input
              name="Nova Senha"
              type="password"
              placeholder="Crie uma nova senha"
              label="Nova Senha"
            />
            <Input
              name="Telefone"
              type="tel"
              placeholder="Atualize o telefone do cliente"
              label="Telefone"
            />
            <Input
              name="E-mail"
              type="email"
              placeholder="Atualize o e-mail do cliente"
              label="E-mail*"
            />
            <Input
              name="Razão Social"
              type="text"
              placeholder="Atualize razão social do cliente"
              label="Razão Social"
            />
            <Input
              name="Contrato de Saúde"
              type="text"
              placeholder="Atualize o contato de saúde"
              label="Contrato de Saúde"
            />
            <Input
              name="Contrato de Vida"
              type="text"
              placeholder="Atualize o contato de Vida"
              label="Contato de Vida"
            />
            <Input
              name="Contrato Dental"
              type="text"
              placeholder="Atualize o contrato Dental"
              label="Contrato Dental"
            />
            <Button type="submit" name="Atualizar">
              
            </Button>
          </form>
          <div className="positionClient">
            <h3>Gerenciamento de Usuário</h3>
            <Button type="submit" name="Criar usuário" onClick={()=>{setClientModal(<CreateClientModal/>)}}></Button>
          </div>
          <ul className="clientList">
            <li>
              <span className="close" onClick={()=>{setClientModal(<RemoveClientModal name={"name"}/>)}}> x </span>
              <h4>Médico</h4>
              <div>
                <Button type="button" name="Editar" onClick={()=>{setClientModal(<EditClientModal/>)}}></Button>
                <Button type="button" name="Desativar"></Button>
              </div>
            </li>
          </ul>
        </div>
      </ModalBackground>
    </EditCompany>
  );
};
