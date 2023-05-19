import styled from "styled-components";

export const MenuStyle = styled.div`
width: 70%;
height: max-content;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 24px;
padding: 32px 16px;

a{
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    
}
.positionBenefits{
    display: flex;
    align-items: center;
    
}
.relativeModal{
    position: relative;
}
main{
    position: absolute;
    top: -80px;
}

`
