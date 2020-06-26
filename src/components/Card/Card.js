import React from "react"
import * as S from "./Card.styles"
import ReactPlayer from "react-player/lazy"

export default ({className, name, videoSrc}) => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Card className={className} >
                    <ReactPlayer url={videoSrc} playing={true} controls width="100%" height="260px" light="https://www.billingsandedmonds.co.uk/bannerimg61.jpeg"/>
                    <S.Title>{name}</S.Title>
                </S.Card>
            </S.Wrapper>
        </S.Container>
    )
}

