import NavBar from "../components/NavBar"

function Header(props) {

    const { links  } = props

    return (
        <header>
            <NavBar linksGeneral={ links.general } />
        </header>
    )
}

export default Header