import styled from "styled-components";

export const Main = styled.main`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: max-content;
background-color: var(--color-primary-1);

.container{
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 100px;
    max-width: 1440px ;
    color: var(--color-white-1);
    padding: 32px;

    div{
        h2{
            width: 90%;
            font-weight: 600;
            font-size: 36px;
        }
        p{
            width: 90%;
            margin-top: 32px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 16px;
        div{
            display: flex;
            flex-direction: column;
            gap: 16px;

            select{
                margin: 8px 0;
            }
        }
        textarea{
            width: 100%;
            height: 150px;
            resize: none;
            padding: 16px;
            border: 1px solid var(--color-grey-0);
            border-radius: var(--radius-1);
            margin: 8px 0;
        }
    }
}

@media (min-width: 768px) {
    min-height: 70vh;
        .container{
            flex-direction: row;
            
            .text{
                width: 50%;
                padding: 32px;

                h2,p{
                    width: 70%;
                }
            }
            
            form{
                width: 50%;
                div{
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-between;

                    label{
                        width: 50%;
                    }
                }
                textarea{
                    margin: 16px 0;
                }
                .buttonBox{
                    display: flex;
                    justify-content: flex-end;
                    button{
                        width: 170px;
                    }
                }
            }
        }
    }

`