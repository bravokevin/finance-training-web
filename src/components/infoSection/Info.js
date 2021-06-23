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

const Info = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <Subtittle>Subtittle</Subtittle>
                                <BtnWrap>
                                    <Button>Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info