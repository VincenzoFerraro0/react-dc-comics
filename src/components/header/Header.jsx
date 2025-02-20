import NavBar from "./NavBar.jsx"

function Header(props) {

    const { links  } = props

    return (
        <header>
            <NavBar linksGeneral={ links.general } />
        </header>
    )
}

export default Header