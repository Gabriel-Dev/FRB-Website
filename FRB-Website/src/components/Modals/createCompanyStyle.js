import styled from "styled-components";

export const CreateCompany = styled.div`
  .createCompany {
    width: 90%;
    max-width: 400px;
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
        button {
          background-color: var(--color-primary-1);
          margin-top: 16px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .edit {
      width: 80%;
      padding: 64px 32px;
      div {
        form {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          label {
            min-width: 30%;
            width: 30%;
          }
          button {
            width: 30%;
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
