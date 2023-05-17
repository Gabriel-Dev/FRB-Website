import styled from "styled-components";

export const FooterStyle = styled.footer`
width: 100%;
height: max-content;

background-color: var(--color-secondary);
color: var(--color-grey-1);

margin-top: 64px;
position: relative;

div{
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 8px;
    padding: 0px 32px;

    h3{
        margin-top: 32px;
    }

    .icons{
        width: 100%;
        flex-direction: row;
        padding: 8px;
        margin-bottom: 100px;
        svg{
            width: 24px;
            height: 24px;
        }
        
    }
}


img{
    position: absolute;
    bottom: 32px;
    right: 32px;
}
`