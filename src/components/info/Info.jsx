import React from 'react'
import { Button } from '../ButtonElements.style'
//import img from '../../images/svg-1.svg'
import { Column2, Img, ImgWrap,TopLine,Heading,BtnWrap,Subtitle ,InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper} from './infoElements.style'

const Info = ({lightBg,id,imgStart,topLine,headLine,lightText,darkText,description,buttonLable,alt,primary,img}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="home" primary={primary}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >{buttonLable}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap >
                         <Img  src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info