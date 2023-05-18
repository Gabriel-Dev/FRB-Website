import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: max-content;

p{
    line-height: 1.2;
}

section{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;
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
    height: 80%;
    div{
        display: flex;
        flex-direction: column;
        
        gap: 16px;

        p{
           text-align: center;
        }
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
        position:absolute ;
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
        z-index: 2;
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
    margin: 32px 0;
    
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        padding: 16px;
        width: 90%;
        height: 370px;
        border: 1px solid black;
        border-radius: var(--radius-2);
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
        text-align: center;

        img{
            max-width: 150px;
            max-height: 150px;
        }

        h3{
            font-size: 24px;
            width: 80%;
            color: var(--color-primary-1);
        }
      
    }
}

@media (min-width: 768px) {
    section{
        max-width: 1440px;
    }
    .handsImg{
        height: 800px;
    }
    .whyFRB{
        height: 300px;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        h3{
            font-size: 48px;
            width: 50%;
            text-align: center;
        }

        div{
            height: 80%;
            align-items: center;
            justify-content: space-around;
            gap: 16px;
            width: 50%;
            p{
                width: 70%;
            }
            border-left: 2px solid var(--color-primary-3);
        }
    }
    .fatherImg{
        height: 300px;
        display: flex;
        justify-content: center;

        div{
            max-width: 1440px;
            height: 300px;
            position: relative;
            img{
                height: 380px;
                width: 600px;
                position:absolute ;
                bottom: 0;
                left: 0;
                z-index: 1;  
            }
            p{
                font-size: 36px;
                bottom: 120px;
            }
        }
    }
    .cardList{
        flex-direction: row;
        flex-wrap: wrap;
        li{
            max-width: 30%;
        }
    }
}

`