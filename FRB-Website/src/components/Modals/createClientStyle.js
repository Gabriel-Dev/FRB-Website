import styled from "styled-components";

export const CreateClient = styled.div`
  .createClient {
    width: 80%;
    max-width: 740px;
    height: 60%;
    overflow: auto;
    padding: 64px 16px;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        label {
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary-2);
          input {
            margin: 0;
          }
        }
        select {
          width: 100%;
          height: 45px;
          background: var(--color-white-1);
          border: 1px solid var(--color-grey-0);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
          padding: 16px;
        }

        textarea {
          width: 100%;
          height: 150px;
          resize: none;
          padding: 16px;
          border: 1px solid var(--color-grey-0);
          border-radius: var(--radius-1);
          
        }
        button {
          background-color: var(--color-primary-1);
          margin-top: 16px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .createClient {
      max-height: 480px;
      width: 80%;
      padding: 64px 32px;
      overflow: hidden;
      div {
        height: 100%;
        
        form {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 32px;
          label {
            min-width: 45%;
            width: 45%;
          }
          div{
            width: 100%;
            height: max-content;
            display: flex;
            align-items: center;
            button {
              width: 200px;
            }
          }
        }
      }
      .positionClient {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h3 {
          width: max-content;
        }
        button {
          width: 30%;
        }
      }
      .clientList {
        li {
          min-width: 40%;
        }
      }
    }
  }
`;
