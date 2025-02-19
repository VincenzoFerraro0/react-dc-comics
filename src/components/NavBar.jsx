import Logo from "./Logo"
import HamburegerMenu from "./HamburgerMenu";

function NavBar(props) {

    const { linksGeneral  } = props
    return (
        <nav className="container-80">
            <Logo />
            <HamburegerMenu />

            <ul id="navMenu">
                {
                    linksGeneral.map((element) => {
                        const {id, text, url, current } = element;
                        return (
                            <li className={current ? 'active' : '' } key={id}>
                                <a className={current ? 'active' : '' } href={url}>
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar