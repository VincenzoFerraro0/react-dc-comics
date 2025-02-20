import iconFb from "/footer-facebook.png"
import iconTw from "/footer-twitter.png"
import iconYt from "/footer-youtube.png"
import iconPin from "/footer-pinterest.png"
import iconPeri from "/footer-periscope.png"

import MenuFooter from "./MenuFooter"


function Footer({links}) {
    
    return (
        <footer>
            <section id="topFooter">
                <div className="container-80 bg-logo">
                    <MenuFooter links={links} />
                </div>
            </section>
            <section id="bottomFooter">
                <div className="container-80">
                    <button className="active">
                        sing-up now!
                    </button>
                    <div className="footerIcon">
                        <span>
                            follows us
                        </span>
                        <ul>
                            <li>
                                <a href="">
                                    <figure><img src={iconFb} alt="icon facebook" /></figure>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <figure><img src={iconTw} alt="icon twitter" /></figure>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <figure><img src={iconYt} alt="icon youtube" /></figure>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <figure><img src={iconPin} alt="icon pinterest" /></figure>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <figure><img src={iconPeri} alt="icon periscope" /></figure>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </footer>
    )
}
export default Footer