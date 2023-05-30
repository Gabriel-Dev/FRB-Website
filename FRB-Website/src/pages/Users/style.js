import styled from "styled-components";
export const Main = styled.main`
  height: 100vh;
  .imgLogo {
    width: 160px;
    height: 90;
  }
  .positionHeader {
    padding: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iconBack {
    width: 39px;
    height: 36px;
    color: var();
    cursor: pointer;
  }

  p {
    color: var(--color-white-1);
  }
  .positionBi {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .powerBi {
    margin-top: 10px;
    width: 100%;
    height: 700px;
    color: red;
  }
  .nameUser {
    color: black;
    font-size: 18px;
    font-weight: 500;
    padding: 0px 0px 0px 30px;
  }
  iframe {
    width: 100%;
    height: 600px;
  }
  .positionButton {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
      padding: 10px;
      background-color: var(--color-primary-1);
      border-radius: 30px;
      color: white;
    }
  }
  @media (min-width: 768px) {
  }
`;
