import NavBar from "./NavBar"

function Header(props) {

    const { linksGeneral  } = props

    return (
        <header>
            <NavBar linksGeneral={ linksGeneral  } />
        </header>
    )
}

export default Header