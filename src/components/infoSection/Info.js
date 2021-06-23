import React from 'react'
import { Button } from '../Button.styles'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtittle,
    BtnWrap,
    Img,
    ImgWrap
} from './Info.styles'

const Info = ({ ligthBg, id, lightText, topLine, dark, headline, description, buttonLabel, img, alt, imgStart }) => {

    return (
        
        <>
            <InfoContainer ligthBg={ligthBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtittle darkText={dark}>{description}</Subtittle>
                                <BtnWrap>
                                    <Button to="home">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img.default} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info