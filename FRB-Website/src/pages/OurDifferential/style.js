import styled from "styled-components";
export const Main = styled.main`
  height: 100%;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
 
.ulList{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  li:hover {
      transition: 0.2s;
      box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.9);
      transform: translatey(-5px);
    }
  li{
    width: 400px;
    height: max-content;
    background-color: var(--color-primary-1);
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
    
    div{
      display: flex;
    flex-direction: column;
    align-items: center;
      border-radius:20px;
      
      background-color: var(--color-white-1);
      border:1px solid var(--color-primary-1);
      width: 100%;
    p{
      font-weight:500;
      display: flex;
      
      align-items: center;
      min-height: 50px;
    }
    }
  }
  img{
    width: 100px;
    height: 100px;
    padding: 10px;
  }
}
  .positionText {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
  }
  .imgCard {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      height: 400px;
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
      width: 100%;

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
    
  }
`;
