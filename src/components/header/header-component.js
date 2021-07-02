import React from 'react'
import { NavWrapper, NavLink, Nav, NavLinksWrapper } from "./header-styles"
const Header = () => {
    return (
        <NavWrapper>
            <Nav>
                <div>
                    logo
                </div>
                <NavLinksWrapper>
                    <NavLink to='/sign-up'>
                        Sign up
                    </NavLink>
                    <NavLink to='/sign-in'>
                        Sign in
                    </NavLink>
                </NavLinksWrapper>
            </Nav>
        </NavWrapper>
    )
}

export default Header
