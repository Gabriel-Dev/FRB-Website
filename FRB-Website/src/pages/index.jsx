import { Modal } from "../components/Modals";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Main, Icon } from "./removeStyle";
import { Edit } from "./editStyle";

export const ModalsPage = () => {
  const open = "edit"
  return (
    <>
      <Main>
        {open == "remove" ? 
        <Modal size="remove">
          <Icon/>
          <h4>Tem certeza que deseja remover a empresa NOMEDAEMPRESA?</h4>
          <div>
            <span>
              <Button type="button" name="cancelar"/>
              <Button type="button" name="Sim, tenho certeza"/>
            </span>
          </div>
        </Modal> : null}
        </Main>

        <Edit>
          {open == "edit" ? 
          <Modal size="edit">
            <form>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
              label="Nome*"/>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
              label="Nome*"/>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
              label="Nome*"/>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
              label="Nome*"/>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
              label="Nome*"/>
              <Button type="submit" name="Atualizar"> </Button>
            </form>
            <div>
              <h3>Cliente</h3>
              <Button type="submit" name="Criar cliente"> </Button>
            </div>

            <ul className="clientList">
              <li>
                <span className="close"> x </span>
                <h4>tipo</h4>
                <div>
                  <Button type="button" name="Editar"></Button>
                  <Button type="button" name="Desativar"></Button>
                </div>
              </li>
            </ul>
          </Modal> : null}
        </Edit>
    </>
  );
};
