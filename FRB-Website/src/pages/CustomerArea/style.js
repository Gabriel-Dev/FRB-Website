import styled from "styled-components";
export const Main = styled.main`
  background-color: var(--color-primary-1);
  width: 100%;
  height: max-content;
  .positionIconBack {
    display: flex;
    width: 100%;
    padding: 30px;
  }
  .imgIconBack {
  }
  .positionLogo {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .positionElipse {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }
  .elipse {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0 112 186 / 31%);
  }
  .elipse2 {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgb(0 181 239 / 44%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .elipse3 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: rgb(170 223 249 / 33%);
  }
  .boxLogin {
    
    height: max-content;
    background-color: var(--color-white-1);
  }
`;
