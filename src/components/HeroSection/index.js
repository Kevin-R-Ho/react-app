import React, {useState} from 'react'
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBthWrapper,
    ArrowForward,
    ArrowRight
} from './HeroSectionElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and recieve $250
                    in credit towards your next payment!
                </HeroP>
                <HeroBthWrapper>
                    <Button to="signup" 
                    onMouseEnter = {onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'

                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBthWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
