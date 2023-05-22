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
              name="Nome da empresa"
              type="text"
              placeholder="Digite o nome da empresa"
              label="Nome da empresa"
            />
            <Input
              name="CNPJ"
              type="text"
              placeholder="Digite o cnpj da empresa"
              label="CNPJ"
            />
            <Input
              name="Nova Senha"
              type="password"
              placeholder="Digite uma nova senha"
              label="Nova Senha"
            />
            <Input
              name="Telefone"
              type="tel"
              placeholder="Digite o telefone da empresa"
              label="Telefone"
            />
            <Input
              name="E-mail"
              type="email"
              placeholder="Digite o e-mail da empresa"
              label="E-mail*"
            />
            <Button type="submit" name="Atualizar">
              {" "}
            </Button>
          </form>
          <div className="positionClient">
            <h3>Cliente</h3>
            <Button type="submit" name="Criar cliente" onClick={()=>{setClientModal(<CreateClientModal/>)}}></Button>
          </div>
          <ul className="clientList">
            <li>
              <span className="close" onClick={()=>{setClientModal(<RemoveClientModal name={"name"}/>)}}> x </span>
              <h4>tipo</h4>
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
