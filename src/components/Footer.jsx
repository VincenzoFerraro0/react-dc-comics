import iconFb from "../assets/img/footer-facebook.png"
import iconTw from "../assets/img/footer-twitter.png"
import iconYt from "../assets/img/footer-youtube.png"
import iconPin from "../assets/img/footer-pinterest.png"
import iconPeri from "../assets/img/footer-periscope.png"


function Footer() {
    return (
        <footer>
            <section id="topFooter">
                <div className="container-80 bg-logo">
                    <div>
                        <h3>dc comics</h3>
                        <ul>
                            <li><a href="">Characters</a></li>
                            <li><a href="">Comics</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>
                        <h3>shop</h3>
                        <ul>
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>dc</h3>
                        <ul>
                            <li><a href="">Terms Of Use</a></li>
                            <li><a href="">Privacy policy (New)</a></li>
                            <li><a href="">Ad Choices</a></li>
                            <li><a href="">Advertising</a></li>
                            <li><a href="">Subscriptions</a></li>
                            <li><a href="">Talent Workshops</a></li>
                            <li><a href="">CPSC Certificates</a></li>
                            <li><a href="">Ratings</a></li>
                            <li><a href="">Shop Help</a></li>
                            <li><a href="">Contact Us</a></li>

                        </ul>
                    </div>
                    <div>
                        <h3>sites</h3>
                        <ul>
                            <li><a href="">DC</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">DC Kids</a></li>
                            <li><a href="">DC Universe</a></li>
                            <li><a href="">DC Power Visa</a></li>
                        </ul>
                    </div>
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