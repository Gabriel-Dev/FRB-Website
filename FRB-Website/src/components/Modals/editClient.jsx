import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { EditClient } from "./editClientStyle";

export const EditClientModal = () => {
  return (
    <EditClient>
      <ModalBackground size="editClient">
        <div>
          <form>
            <Input
              name="Nome do cliente"
              type="text"
              placeholder="Digite o nome do cliente"
              label="Nome do cliente"
            />
            <Input
              name="Link Power Bi"
              type="text"
              placeholder="Digite o link power Bi"
              label="Link Power Bi"
            />
            <label> Nivel do cliente
              <select>
                <option value="">--</option>
                <option value="Admin">Admin</option>
                <option value="Commun">Usuário comum</option>
              </select>
            </label>
            <label> Descrição do cliente
              <textarea name="description" placeholder="Digite a descrição do cliente"></textarea>
            </label>
            <div>
              <Button type="submit" name="Atualizar"></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </EditClient>
  );
};
