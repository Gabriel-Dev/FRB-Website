import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  .positionTextInto {
    position: relative;
  }
  /* .imgIntro {
    width: 100%;
    height: 400px;
    object-fit: cover;
  } */
video{
width: 100%;
object-fit: cover;
}

.textIntro {
    position: absolute;
    top: 20%;
    left: 5%;
    color: var(--color-primary-1);
    font-size: 20px;
    height: 50%;
    width: 55%;
    padding: 25px;
    font-weight: 600;
  }
  .positionCard {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    position: relative;
    bottom: 5px;
  }
  .positionDental {
    padding: 35px;
  }
  .boxImg {
    background-color: var(--color-primary-3);
    height: 250px;
  }
  .boxImgHealth {
    background-color: var(--color-primary-1);
  }
  .textBenefits {
    font-size: 22px;
    color: var(--color-white-1);
    font-weight: 600;
  }
  .imgBenefits {
    width: 100px;
    height: 100px;
  }

  .positionTextBenfits {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .controlText {
    display: flex;
    justify-content: center;
  }

  .whiteBanner {
    height: 4px;
    background-color: var(--color-white-1);
  }

  .positionHealth {
    height: 300px;
  }
  .blueBanner {
    height: 15px;
    position: relative;
    background-color: var(--color-primary-1);
  }
  .cardPosition {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .cardPositionHealth {
    display: flex;
    flex-direction: column;
    gap: 59px;
  }
  .marginHealth {
    margin-top: 35px;
  }
  .imgTooth {
    width: 100px;
    height: 100px;
  }
  .widthbox {
    width: 250px;
  }
  .boxBlue {
    background-color: var(--color-primary-3);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  .textHealth {
    font-size: 22px;
    color: var(--color-white-1);
    font-weight: 600;
  }
  .articleHealth {
    font-size: 18px;
    color: var(--color-white-1);
    font-weight: 600;
    width: 80%;
    margin-bottom: 5%;
  }
  .articleHealthFinal {
    margin-bottom: 15%;
  }
  .marginTop {
    margin-top: 10%;
  }
  .boxWhite {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  .textLife {
    color: var(--color-primary-3);
    font-size: 22px;
    font-weight: 600;
  }
  .articleLife {
    font-size: 18px;
    color: var(--color-primary-3);
    font-weight: 600;
    width: 80%;
    margin-bottom: 5%;
  }
  .articleLifeFinal {
    margin-bottom: 15%;
  }
  .positionLayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .positionLayoutText {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    .imgIntro {
      height: 800px;
    }
    .positionCard {
      width: 100%;
      overflow-x: hidden;
    }
    .widthbox {
      width: 100%;
    }
    .boxBlue {
      display: flex;
      flex-direction: row;
      height: 300px;
      padding: 30px;
    }
    .positionLayout {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .positionLayoutText {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      width: 90%;
    }
    .articleHealth {
      font-size: 23px;
      margin-bottom: 0%;
    }
    .boxWhite {
      padding: 30px;
      height: 300px;
      display: flex;
      flex-direction: row-reverse;
    }
    .articleLife {
      font-size: 23px;
      margin-bottom: 0%;
    }
    .textIntro {
      font-size: 32px;
      width: 500px;
    }
  }
`;
