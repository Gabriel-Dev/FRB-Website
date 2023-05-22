import styled from "styled-components";

export const Edit = styled.div`

.edit{
  width: 90%;
  height: 80%;
  overflow: auto;
  padding: 64px 16px;
  
  div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    
    form{
      display: flex;
      flex-direction: column;
      gap: 16px;
      
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
      min-height: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow-x: scroll;
      border-radius: var(--radius-1);
      padding: 16px;
      gap: 16px;
      background-color: var(--color-white-2);
      
      li{
        min-width: 90%;
        height: max-content;
        padding: 16px;
        position: relative;
        background-color: var(--color-white-1);
        display: flex;
        flex-direction: column;
        gap: 32px;

        border-radius: var(--radius-1);
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
}

@media (min-width:768px) {
  .edit{
    width: 80%;
    padding: 64px 32px;
    div{
      form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        label{
          width: 40%;
        }
      }
    }
  }
}
`

