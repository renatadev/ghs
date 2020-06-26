import React from "react"
import * as S from "./Header.styles"
import logo from "../../assets/logo.svg"

export default () => {
    return (
        <S.Header>
            <S.StyledLogo src={logo}></S.StyledLogo>
            <S.Title>Instrument Demos from the music teachers of Garden House</S.Title>
            <S.Subtitle>Sign up for lessons on the parents portal</S.Subtitle>
            <S.Button href="https://www.gardenhouseschool.co.uk/parents-portal/music-tuition" target="_blank">click here</S.Button>
        </S.Header>
    )
}