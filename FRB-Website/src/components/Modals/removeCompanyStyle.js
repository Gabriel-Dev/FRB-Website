import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri"

export const RemoveCompanyStyle = styled.div`
.removeCompany{
  width: 90%;
  max-width: 400px;
  height: max-content;
  gap: 16px;

  h4{
    padding: 32px;
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
      width: 40%;
      height: 32px;
      background-color: var(--color-primary-1);
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

