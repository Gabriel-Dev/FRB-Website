import styled from "styled-components";
export const Modal = styled.main`
  @media (min-width: 768px) {
    margin-top: 100%;
    background-color: var(--color-white-1);

    padding: 10px;
    img {
      width: 25px;
      height: 25px;
    }
    .displayBox {
      display: flex;
      gap: 10px;
      padding: 10px;
      justify-content: space-between;
      align-items: center;
    }
    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
    }
  }
`;
