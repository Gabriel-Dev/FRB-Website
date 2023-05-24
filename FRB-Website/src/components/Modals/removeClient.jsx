import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { RemoveClientStyle, Icon } from "./removeClientStyle";

export const RemoveClientModal = ({name}) => {
  
  return (
      <RemoveClientStyle>
          <ModalBackground size="removeClient">
            <Icon />
            <h4>Tem certeza que deseja remover o usuário {name}?</h4>
            <div>
              <span>
                <Button type="button" name="cancelar" />
                <Button type="button" name="Sim, tenho certeza" />
              </span>
            </div>
          </ModalBackground>
      </RemoveClientStyle>
  );
};
