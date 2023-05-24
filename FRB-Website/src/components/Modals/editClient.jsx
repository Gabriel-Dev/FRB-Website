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
              name="Nome do usuário"
              type="text"
              placeholder="Atualize o nome do usuário"
              label="Nome do usuário"
            />
            <Input
              name="Link Power Bi"
              type="text"
              placeholder="Atualize o link Power Bi"
              label="Link Power Bi"
            />
            <Input
              name="E-mail"
              type="email"
              placeholder="Atualize o email do usuário"
              label="E-mail"
            />
            <label> Nivel do usuário
              <select>
                <option value="">--</option>
                <option value="medic">Médico</option>
                <option value="rh">RH</option>
              </select>
            </label>
            <label> Descrição do usuário
              <textarea name="description" placeholder="Digite a descrição do usuário"></textarea>
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
