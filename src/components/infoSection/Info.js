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

const Info = ({ ligthBg, id, ligthText, topLine, dark, headLine, description, buttonLabel, img, alt, imgStart, primary, dark2, darkText}) => {

    return (
        
        <>
            <InfoContainer ligthBg={ligthBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading ligthText={ligthText}>{headLine}</Heading>
                                <Subtittle darkText={darkText}>{description}</Subtittle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0 }
                                    dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
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