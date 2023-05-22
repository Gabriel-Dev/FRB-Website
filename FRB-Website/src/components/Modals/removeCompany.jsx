import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { RemoveCompanyStyle, Icon } from "./removeCompanyStyle";

export const RemoveCompanyModal = ({name}) => {
  return (
      <RemoveCompanyStyle>
          <ModalBackground size="removeCompany">
            <Icon />
            <h4>Tem certeza que deseja remover a empresa {name}?</h4>
            <div>
              <span>
                <Button type="button" name="cancelar" />
                <Button type="button" name="Sim, tenho certeza" />
              </span>
            </div>
          </ModalBackground>
      </RemoveCompanyStyle>
  );
};
