import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100%;
height: 100px;

display: flex;
align-items: center;
justify-content: center;
position: sticky;
top: 0;
left: 0;
z-index: 2;

background-color: var(--color-grey-1);
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);

.container{
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