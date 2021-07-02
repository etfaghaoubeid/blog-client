import styled from "styled-components";

export const StyledButton = styled.button`
cursor: pointer;
width: 20rem;
height: 3rem;
color: ${props => props.outlined ? "#000" : props.theme.whiteColor};
font-weight: 700;
border-radius: 2rem;
margin-top: 1.7rem;
background-color: ${props => props.outlined ? props.theme.whiteColor : props.theme.primaryVariantColor};
border:${props => props.outlined ? "solid 3px" : "none"};
`