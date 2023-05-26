import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { CreateCompany } from "./createCompanyStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AdminContext } from "../../contexts/adminContext/adminContext";
import { createClientSchema } from "../../schemas";

export const CreateCompanyModal = () => {
  const { createClient } = useContext(AdminContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(createClientSchema),
  });

  return (
    <CreateCompany>
      <ModalBackground size="createCompany">
        <div>
          <p className="textHeader">Adicionar cliente</p>
          <form onSubmit={handleSubmit(createClient)}>
            <Input
              name="client_name"
              type="text"
              placeholder="Digite o nome do cliente"
              label="Nome do cliente*"
              register={register("client_name")}
              error={errors.client_name && <p className="error">{errors.client_name.message}</p>}
            />
            <Input
              name="cnpj"
              type="text"
              placeholder="Digite o cnpj do cliente"
              label="CNPJ*"
              register={register("cnpj")}
              error={errors.cnpj && <p className="error">{errors.cnpj.message}</p>}
            />
            <Input
              name="corporate_name"
              type="text"
              placeholder="Digite a razão social"
              label="Razão social*"
              register={register("corporate_name")}
              error={errors.corporate_name && <p className="error">{errors.corporate_name.message}</p>}
            />
            <Input
              name="tel"
              type="tel"
              placeholder="Digite o telefone do cliente"
              label="Telefone"
              register={register("tel")}
            />
            <Input
              name="client_email"
              type="email"
              placeholder="Digite o e-mail do cliente"
              label="E-mail"
              register={register("client_email")}
            />
            <div className="positionContract">
            <Input className="contractNumber"
              name="contract_health"
              type="number"
              placeholder="Digite o contrato de Saúde"
              label="Contrato de Saúde"
              register={register("contract_health")}
            />
            <Input className="contractNumber"
              name="contract_life"
              type="number"
              placeholder="Digite o contrato de Vida"
              label="Contrato de Vida"
              register={register("contract_life")}
            />
            <Input className="contractNumber"
              name="contract_dental"
              type="number"
              placeholder="Digite o contrato Dental"
              label="Contrato Dental"
              register={register("contract_dental")}
            /></div>
            <Button type="submit" name="Adicionar"></Button>
          </form>
        </div>
      </ModalBackground>
    </CreateCompany>
  );
};
