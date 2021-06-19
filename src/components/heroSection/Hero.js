import React, { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRigth, HeroBtnWrapper } from './Hero.styles'
import { Button } from "../Button.styles";

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recive $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Get started {hover ? <ArrowForward /> : <ArrowRigth />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;