
import Header from "../components/header/header-component"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <h3>footer</h3>
        </>
    )
}

export default Layout