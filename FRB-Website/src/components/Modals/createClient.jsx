import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { CreateClient } from "./createClientStyle";

export const CreateClientModal = () => {
  return (
    <CreateClient>
      <ModalBackground size="createClient">
        <div>
          <form>
            <Input
              name="Nome do usuário"
              type="text"
              placeholder="Digite o nome do usuário"
              label="Nome do usuário"
            />
            <Input
              name="Link Power Bi"
              type="text"
              placeholder="Digite o link power Bi"
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
              <Button type="submit" name="Criar"></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </CreateClient>
  );
};
