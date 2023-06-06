import styled from "styled-components";

export const MenuStyle = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  padding: 32px 16px;
  a, span {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
  span:hover, a:hover {
    color: var(--color-primary-2);
    transition: 0.2s;
        transform: translatey(-2px);
  }
  .positionBenefits {
    display: flex;
    align-items: center;
    position: relative;
  }
  .relativeModal {
    margin: 0;
    position: relative;
  }
  
  @media (min-width: 768px) {
    main {
    position: absolute;
    top: -80px;
  }
  }
`;
