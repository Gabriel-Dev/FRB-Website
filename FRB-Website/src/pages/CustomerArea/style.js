import styled from "styled-components";
export const Main = styled.main`
  background-color: var(--color-primary-1);
  width: 100%;
  min-width:404px;
  
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
    width: 400px;
    height: 400px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0 112 186 / 31%);
  }
  .elipse2 {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-color: rgb(0 181 239 / 44%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .elipse3 {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgb(170 223 249 / 33%);
  }
  .boxLogin {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
    padding: 30px;
    height: max-content;
    background-color: var(--color-white-1);
    border-radius:10px;
    width: 90%;
  }
  .textLogin{
    color: var(--color-primary-1);
    font-weight:500;
    width:100%;
    display: flex;
    justify-content: center
  }
  label{
    color: var(--color-primary-1);
    
  }
  input{
    margin-top:0
  }
  .textFooter{
    font-family: 'Nunito', sans-serif;
    font-size:36px;
    font-weight:700;
    color: var(--color-white-1);
    padding: 55px;
   
  }
  .inputPosition{
    display: flex;
    flex-direction:column;
    gap: 30px;
  }
  
  @media(min-width:758px){
    height: 940px;
  
    .reverse{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
.textFooter{
  position: relative;
  left: 10%;
  width: 400px;
  text-align:center;
}
.imglogo{
  width: 128px;
  height: 45px;
  
}
.positionElipse{width:50%

}
.elipse {
    width: 500px;
    height: 500px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }
  .elipse2 {
    width: 450px;
    height: 450px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .elipse3 {
    width: 400px;
    height: 400px;
   
  }
  .boxLogin {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 50px;
    position: relative;
    bottom: 30px;
    
    height: 450px;
    background-color: var(--color-white-1);
    border-radius:10px;
    
  }
  .inputPosition{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  min-width: 905px;
  }
  .textLogin{
    font-size:24px
  }
  
`;
