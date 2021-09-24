import React, { useState } from 'react'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1 ,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements.style'
import video from '../../videos/videoBg.mp4'
import { Button } from '../ButtonElements.style'
const HeroSection = () => {
    const [hover, sethover] = useState(false)
    const onHover =()=>{
        sethover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                <HeroContent>
                    <HeroH1>Virtual banking mode</HeroH1>
                    <HeroP>
                        sign up for new account today and recieve $250 in credit.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                Get started {hover ? <ArrowForward />: <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection
