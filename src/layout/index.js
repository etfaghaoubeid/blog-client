import Container from "react-bootstrap/Container"
import Footer from "../components/footer/footer.component"
import Header from "../components/header/header-component"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer/>
        </>
    )
}

export default Layout