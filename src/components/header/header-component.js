import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavWrapper, NavLink, NavLinksWrapper } from "./header-styles"
const Header = () => {
    return (
        // <NavWrapper>
        //     <Nav>
        //         <div>
        //             logo
        //         </div>
        //         <NavLinksWrapper>
        //             <NavLink to='/sign-up'>
        //                 Sign up
        //             </NavLink>
        //             <NavLink to='/sign-in'>
        //                 Sign in
        //             </NavLink>
        //             <NavLink to='/accessories'>
        //                 Sign in
        //             </NavLink>
        //         </NavLinksWrapper>
        //     </Nav>
        // </NavWrapper>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Chari</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link  as={NavLink} to="/phones">Phones</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    )
}

export default Header
