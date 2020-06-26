import styled from "styled-components";

export const Header = styled.div`
background-color: #162238;
padding: 60px;
text-align: center;
color: white;
margin-bottom: 60px;
`;

export const StyledLogo = styled.img`
width: 16%;
`;

export const Title = styled.h2`
`;

export const Subtitle = styled.h3`
`;

export const Button = styled.a`
text-decoration: none;
text-transform: uppercase;
font-size: 16px;
color: #162238;
background-color: white;
padding: 10px;
border: none; 
text-align: center;
text-decoration: none;
display: inline-block;
border-radius: 5px;

&:hover {
    opacity: 0.9;
}
`;
