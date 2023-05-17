import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100%;
height: 100px;

display: flex;
align-items: center;
justify-content: center;
position: relative;

div{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 32px;
    
    svg{
        width: 30px;
        height: 30px;
    }
}

.boxMenu{
    flex-direction: column;
    align-items: flex-start;

    gap: 24px;
    padding: 32px 16px;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    width: 40%;
    height: max-content;

    background-color: var(--color-grey-1);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    border-radius: 4px;

    .close{
        position: absolute;
        right: 24px;
        top: 24px;
        font-size: 20px;
    }

    .menu{
        font-weight: 500;
    }

    p{
        font-weight: 700;
    }

}
`