import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
display: flex;
background: #0c0c0c;
justify-content: center;
align-items: center;
padding:0 30px;
height: 800px;
position: relative;
z-index: 1;

`
export const  HeroBg =styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
background: #232a34;
`
export const HeroContent =styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 =styled.h1`
color: #fff;
font-size: 48px;
text-align:center;
@media screen and (max-width:768px){
    font-size: 40px;
}
@media screen and (max-width:480px){
    font-size: 32px;
}

`
export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align:center;
max-width: 600px;
@media screen and (max-width:768px){
    font-size: 24px;
}
@media screen and (max-width:480px){
    font-size: 18px;
}

`
export const HeroBtnWrapper = styled.div`
display: flex;
margin-top: 32px;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
font-size: 20px;
margin-left: 8px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
font-size: 20px;
margin-left: 8px;
`