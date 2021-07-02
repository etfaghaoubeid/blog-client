import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.header`
background-color:red;
background-color: ${(props) => props.theme.primaryColor};
height: 4rem;
width:100%;
color:${({ theme }) => theme.whiteColor};
`
export const Nav = styled.nav``;
export const Logo = styled.img``;
export const NavLinksWrapper = styled.div``
export const NavLink = styled(Link)`
text-decoration: none;
font-weight:600;
font-size: 14px;
color:${(props) => props.theme.whiteColor};

`