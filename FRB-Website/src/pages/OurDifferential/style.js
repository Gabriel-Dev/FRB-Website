import styled from "styled-components";
export const Main = styled.main`
height: 100%;
.imgIntro{
    width:100%;   
}
img{
    width: 100%;
    height: 250px;
    
}
.positionText{
    display: flex;
    flex-direction:column;
    gap: 20px;
    padding: 20px;
}
.purple{
    color: var(--color-purple);
    font-size: 17;  
}
.article{
font-weight: 300;
}
@media(min-width:768px){

    .imgIntro{
        height: 600px;
        min-width:958px;
    }


.positionCard{
    display: flex;   
    width: 100%;
    min-width:958px;
}
.imgCard{
    position: relative;
    bottom: 2%;
    min-width:476.8px;
    height: 350px;
    width: 50%;
}
.positionImg{
width: 100%;
height: 245px;
}
.purple{
    font-size: 23px;   
}
.article{
    font-size: 19px;
    width: 100%;
}
.invert{
    display: flex;
    flex-direction: row-reverse;
    
    
}
.positionText{
    width: 50%;
padding: 0;
gap: 0;
}
p{
 padding :20px ;
}

.imgIntro{
    position: relative;
    top: 4px;
}

}
`