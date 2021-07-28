import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

export const PhoneCard = styled(Col)`
    box-shadow: 2px 2px 10rem #eee; 
    border-radius: 3px;
    height: 33rem;
    margin-bottom: 1rem;
`;
export const ProductInfoContainer = styled.div`
    margin:0.6rem;
`
export const PhoneName = styled.h4``
export const CardImage = styled.img`
    height: 20rem;
    overflow: hidden;
`
export const Price = styled.h3`
    font-weight: bold;

`
export const DiviceInfo = styled.span`
    font-weight: bold;
    font-size: 1.3rem;
`
export const AddButton = styled.button`
    color:${({theme})=>theme.whiteColor};
    border-radius: 1.4rem;
    outline: none;
    background-color: ${({theme})=>theme.primaryVariantColor};
    border:none;
    padding:0.4rem 1.3rem;
`;
export const AskButton = styled.button`
    color:${({theme})=>theme.whiteColor};
    border-radius: 1.4rem;
    outline: none;
    background-color: #05e576;
    border:none;
    padding:0.4rem 1.3rem;
`;

export const CardRow = styled(Row)`
    margin-bottom: 0.5rem;
`