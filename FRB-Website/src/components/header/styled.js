import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100%;
height: 100px;

display: flex;
align-items: center;
justify-content: center;

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
`