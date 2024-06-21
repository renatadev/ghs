import styled from "styled-components";
import Card from "../Card/Card"

export const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 24px;

@media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0 60px;
}
`

export const SingleCard = styled(Card)`
width: 300px;
`
