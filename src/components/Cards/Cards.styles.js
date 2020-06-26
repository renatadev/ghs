import styled from "styled-components";
import Card from "../Card/Card"

export const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

@media screen and (min-width: 600px) {
    flex-direction: row;
}
`

export const SingleCard = styled(Card)`
width: 300px;
`
