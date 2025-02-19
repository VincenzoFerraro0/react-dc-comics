import NavBar from "./NavBar"

function Header(props) {

    const { links } = props

    return (
        <header>
            <NavBar links={links} />
        </header>
    )
}

export default Header