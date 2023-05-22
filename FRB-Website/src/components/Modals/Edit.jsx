import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { Edit } from "./editStyle";

export const EditModal= () => {
  return (
      <Edit>
          <ModalBackground size="edit">
            <div>
            <form>
              <Input name="Nome" type="text" placeholder="Digite seu nome"
                label="Nome*" />
              <Input name="Nome" type="text" placeholder="Digite seu nome"
                label="Nome*" />
              <Input name="Nome" type="text" placeholder="Digite seu nome"
                label="Nome*" />
              <Input name="Nome" type="text" placeholder="Digite seu nome"
                label="Nome*" />
              <Input name="Nome" type="text" placeholder="Digite seu nome"
                label="Nome*" />
              <Button type="submit" name="Atualizar"> </Button>
            </form>
            <div>
              <h3>Cliente</h3>
              <Button type="submit" name="Criar cliente"></Button>
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
            </div>
          </ModalBackground>
      </Edit>
  );
};
