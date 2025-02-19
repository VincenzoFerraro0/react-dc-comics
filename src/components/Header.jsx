import logo from "../assets/img/dc-logo.png"

function Header() {
    return (
        <header>
            <nav className="container-80">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <ul>
                    <li className="active">
                        <a  className="active" href="#">characters</a>
                    </li>
                    <li>
                        <a href="#">comics</a>
                    </li>
                    <li>
                        <a href="#">movies</a>
                    </li>
                    <li>
                        <a href="#">tv</a>
                    </li>
                    <li>
                        <a href="#">games</a>
                    </li>
                    <li>
                        <a href="#">collectibles</a>
                    </li>
                    <li>
                        <a href="#">videos</a>
                    </li>
                    <li>
                        <a href="#">fans</a>
                    </li>
                    <li>
                        <a href="#">news</a>
                    </li>
                    <li>
                        <a href="#">shop</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header