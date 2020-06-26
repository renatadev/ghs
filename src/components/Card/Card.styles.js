import styled from "styled-components";

export const Container = styled.div`
padding-bottom: 20px;
`

export const Wrapper = styled.div`
height: 360px;
background-color: #162238;
padding: 10px;
box-shadow: 4px 4px 4px grey;
border-radius: 5px;

&:hover {
    opacity: 0.9;
}
`
export const Card = styled.div`
    width: 100%;
    color: #162238;
    margin: 6px;
    padding-bottom: 20px;
`;

export const Video = styled.video`
    &:focus {
        outline: none;
        } 

`;

export const Title = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: white;
    padding: 10px;
    border-top: 1px dotted white;

`;
