import styled from "styled-components";
export const SliderStyle = styled.div`
  margin: 0 auto;
  width: 300%;
  height: 400px;
  overflow: hidden;

  .slides {
    width: 100%;
    height: 100%;
    display: flex;

    input {
      display: none;
    }

    .slide {
      width: 33.333%;
      position: relative;
      transition: 2s;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .navigation-manual {
      position: absolute;
      margin-top: 350px;
      width: 100%;
      display: flex;
      justify-content: center;

      .manual {
        height: 10px;
        border: 2px solid var(--color-white-2);
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;
        opacity: 0.5;
      }
      .manual:not(:last-child) {
        margin-right: 40px;
      }
      .manual:hover {
        background-color: var(--color-white-2);
      }
    }

    .navigation-auto {
      position: absolute;
      width: 100%;
      margin-top: 350px;
      display: flex;
      justify-content: center;

      div {
        border: 2px solid var(--color-white-2);
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;
        opacity: 0.5;
      }
      div:not(:last-child) {
        margin-right: 40px;
      }
    }
  }

  #radio1:checked ~ .first {
    margin-left: 0;
  }
  #radio2:checked ~ .first {
    margin-left: -33.333%;
  }
  #radio3:checked ~ .first {
    margin-left: -66.666%;
  }

  #radio1:checked ~ .navigation-auto .auto1 {
    background-color: var(--color-white-2);
  }

  #radio2:checked ~ .navigation-auto .auto2 {
    background-color: var(--color-white-2);
  }

  #radio3:checked ~ .navigation-auto .auto3 {
    background-color: var(--color-white-2);
  }

  @media (min-width: 768px) {
    height: 800px;
    .slides {
      .navigation-manual,
      .navigation-auto {
        margin-top: 750px;
      }
    }
  }
`;
