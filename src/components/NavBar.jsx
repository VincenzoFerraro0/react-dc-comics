import Logo from "./Logo"

function NavBar(props) {

    const { links } = props
    return (
        <nav className="container-80">
            <Logo />
            <ul>
                {
                    links.map((element) => {
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