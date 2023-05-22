import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri"

export const RemoveClientStyle = styled.div`
.removeClient{
  width: 90%;
  max-width: 400px;
  height: max-content;
  gap: 16px;

  h4{
    margin-bottom: 16px;
  }

  div{
    width: 100%;
    display: flex;
    justify-content: center;

    span{
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    button{
      width: max-content;
      height: 32px;
      background-color: var(--color-grey-05);
      color: var(--color-white-1);
    }

    button + button{
      background-color: var(--color-negative);
      border: transparent;
      color: var(--color-white-1);
    }
  }
}

@media (min-width: 768px) {
.remove{
  max-width: 400px;
}
}
`;

export const Icon = styled(RiErrorWarningFill)`
  color: var(--color-warning);
  font-size: 64px;
  stroke-width: 0.01px;
`

