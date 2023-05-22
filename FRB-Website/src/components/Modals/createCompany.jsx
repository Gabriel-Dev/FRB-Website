import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { CreateCompany } from "./createCompanyStyle";

export const CreateCompanyModal = () => {
  return (
    <CreateCompany>
      <ModalBackground size="createCompany">
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
            <Button type="submit" name="Criar"></Button>
          </form>
        </div>
      </ModalBackground>
    </CreateCompany>
  );
};
