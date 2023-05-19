import styled from "styled-components";

export const Edit = styled.div`

.edit{
  width: 90%;
  height: 100vh;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
 
  form{
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 100px;

    label{
      text-align: left;
      color: var(--color-primary-2);

      input{
        margin: 0;
      }
    }

    button{
      background-color: var(--color-primary-1);
      margin-top: 16px;
    }
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    color: var(--color-primary-2);
  }

  ul{
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
    background-color: var(--color-white-2);
    
    li{
      width: 80%;
      height: max-content;
      padding: 16px;
      position: relative;
    
      display: flex;
      flex-direction: column;
      gap: 32px;

      text-align: left;

      div{
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
          background-color: var(--color-primary-1);
          width: 100%;
        }

        button + button {
          background-color: var(--color-negative);

        }
      }
    }
  }
}
  
`

