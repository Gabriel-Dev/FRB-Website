import styled from "styled-components";
export const Modal = styled.main`
  @media (min-width: 768px) {
    margin-top: 95%;
    background-color: var(--color-white-1);
    animation: slideDown 1s ;
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

  @keyframes slideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
