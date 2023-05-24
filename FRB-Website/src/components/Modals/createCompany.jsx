import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { CreateCompany } from "./createCompanyStyle";

export const CreateCompanyModal = () => {
  return (
    <CreateCompany>
      <ModalBackground size="createCompany">
        <div>
          <p className="textHeader">Criar cliente</p>
          <form>
            <Input
              name="Nome do cliente"
              type="text"
              placeholder="Digite o nome do cliente"
              label="Nome do cliente*"
            />
            <Input
              name="CNPJ"
              type="text"
              placeholder="Digite o cnpj do cliente"
              label="CNPJ*"
            />
            <Input
              name="Razão social"
              type="text"
              placeholder="Digite a razão social"
              label="Razão social*"
            />
            <Input
              name="Telefone"
              type="tel"
              placeholder="Digite o telefone do cliente"
              label="Telefone"
            />
            <Input
              name="E-mail"
              type="email"
              placeholder="Digite o e-mail do cliente"
              label="E-mail"
            />
            <div className="positionContract">
            <Input className="contractNumber"
              name="Saúde"
              type="number"
              placeholder="Digite o contrato de Saúde"
              label="Contrato de Saúde"
            />
            <Input className="contractNumber"
              name="Vida"
              type="number"
              placeholder="Digite o contrato de Vida"
              label="Contrato de Vida"
            />
            <Input className="contractNumber"
              name="Dental"
              type="number"
              placeholder="Digite o contrato Dental"
              label="Contrato Dental"
            /></div>
            <Button type="submit" name="Criar"></Button>
          </form>
        </div>
      </ModalBackground>
    </CreateCompany>
  );
};
