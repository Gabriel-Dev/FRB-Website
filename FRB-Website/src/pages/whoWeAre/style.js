import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;

gap: 32px;

width: 100%;
height: max-content;

p{
    line-height: 1.2;
}

.handsImg{
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
       width: 100%;
       height: 100%;
       object-fit: cover;
    }
}

.whyFRB{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;
    padding: 16px;

    width: 100%;
    height: max-content;

    p{
        text-align: center
    }
}

.fatherImg{
    width: 100%;
    height: 150px;
    background-color: var(--color-primary-3);
    margin-top: 32px;
    position: relative;
    
    div{
        width: 100%;
        height: 180px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;  
    }

    img{
        width: 320px;
        height: 100%;
    }

    p{
        width: 50%;
        font-weight: 700;
        font-size: 18px;
        position: absolute;
        bottom: 50px;
        right: 0px;
    }

}

.cardList{
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 32px;

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        gap: 32px;
        padding: 16px;
        
        width: 90%;
        height: 350px;

        border: 1px solid black;
        border-radius: var(--radius-2);

        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);

        text-align: center;

        img{
            width: 150px;
            height: 150px;
        }

        h3{
            font-size: 24px;
            width: 80%;
            color: var(--color-primary-1);
        }
      
    }
}

`