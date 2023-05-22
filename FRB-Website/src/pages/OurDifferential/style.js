import styled from "styled-components";
export const Main = styled.main`
  height: 100%;
  .imgIntro {
    width: 100%;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .positionText {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .imgCard{
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

   
  }
`;
