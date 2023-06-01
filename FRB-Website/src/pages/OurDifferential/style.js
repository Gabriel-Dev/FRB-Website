import styled from "styled-components";
export const Main = styled.main`
  height: 100%;
  
 
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
 

  .view {
    color: var(--color-white-1);
    font-size: 32px;
    width: 300px;
    padding: 25px;
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  .positionText {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .imgCard {
    position: relative;
    top: 5px;
  }
  .purple {
    color: var(--color-purple);
    font-size: 17;
  }
  .article {
    font-weight: 300;
  }
  @media (min-width: 768px) {
    .imgIntro {
      height: 800px;
      margin-bottom: -4px;
    }

    .positionCard {
      display: flex;
      width: 100%;
    }
    .imgCard {
      position: relative;
      bottom: 2%;
      height: 400px;
      width: 50%;
      top: 0px;
    }
    .positionImg {
      width: 100%;
      height: 245px;
    }
    .purple {
      font-size: 23px;
    }
    .article {
      font-size: 19px;
      width: 100%;
    }
    .invert {
      display: flex;
      flex-direction: row-reverse;
    }
    .positionText {
      width: 50%;

      gap: 0;
      display: flex;
    }
    p {
      padding: 20px;
    }
    .positionView {
      position: relative;
      svg {
        color: var(--color-white-1);
        font-size: 60px;

        text-align: center;
      }
    }
    .positionIconP {
      gap: 20px;
      position: absolute;
      top: 20%;
      right: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
