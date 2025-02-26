import iconFb from "../assets/img/footer-facebook.png"
import iconTw from "../assets/img/footer-twitter.png"
import iconYt from "../assets/img/footer-youtube.png"
import iconPin from "../assets/img/footer-pinterest.png"
import iconPeri from "../assets/img/footer-periscope.png"

import MenuFooter from "../components/MenuFooter"



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
                    <button className="btn active">
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