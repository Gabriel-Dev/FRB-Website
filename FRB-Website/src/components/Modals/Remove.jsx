import { Modal } from "../components/Modals";
import { Button } from "../Button";
import { Input } from "../Input";
import { Main, Icon } from "./removeStyle";
import { Edit } from "./editStyle";

export const ModalsPage = () => {
  const open = "edit"
  return (
    <>
      <Main>
        {open == "remove" ?
          <Modal size="remove">
            <Icon />
            <h4>Tem certeza que deseja remover a empresa NOMEDAEMPRESA?</h4>
            <div>
              <span>
                <Button type="button" name="cancelar" />
                <Button type="button" name="Sim, tenho certeza" />
              </span>
            </div>
          </Modal> : null}
      </Main>
    </>
  );
};
