import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #162238;
    text-align:center;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 60px;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;



    @media screen and (min-width: 900px) {
        flex-direction: row;
        height: 280px;
    }
`

export const Element = styled.div`
    line-height: 25px;
`

export const Link = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        opacity: 0.8;
    }
`