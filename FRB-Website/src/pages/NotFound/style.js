import styled from "styled-components";
export const StyledNotFound = styled.main`
background-color: #15161a;
width: 100vw;
height: 100vh;
opacity: 90%;
 img{
  width: 180px;
    height: 90px;
 }
.position{
    position: absolute;
    top: 25%;
    right: 33%;
    display: flex;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 50px;
}
h1{
    color: var(--color-negative);
    font-size: 34px;
}
span{
    color: #ffffff;
    font-size: 34px;
    display: flex;
    gap: 20px;
}
.navigate{
    width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 0;
  background-color: var(--color-primary-2);
  color: var(--color-white-1);
  transition: 0.2s ease;
  margin-top: 10px;

  :hover {
    background-color: var(--color-primary-1);
    transition: 0.2s ease;
  }
}

`