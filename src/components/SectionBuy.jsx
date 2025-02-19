import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import sub from "../assets/img/buy-comics-subscriptions.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import buy from "../assets/img/buy-dc-power-visa.svg"

function SectionBuy() {
    return (
        <section id="comicsIcon">
            <div className="container-80">
                <ul>
                    <li>
                        <figure>
                            <img src={comics} alt="icon digital comics" />
                        </figure>
                        <span>digital comics</span>
                    </li>
                    <li>
                        <figure>
                            <img src={merch} alt="icon dc merchandise" />
                        </figure>
                        <span>dc merchandise</span>
                    </li>
                    <li>
                        <figure>
                            <img src={sub} alt="icon subscription" />
                        </figure>
                        <span>subscription</span>
                    </li>
                    <li>
                        <figure>
                            <img src={shop} alt="icon comk shop locatot" />
                        </figure>
                        <span>comk shop locatot</span>
                    </li>
                    <li>
                        <figure>
                            <img src={buy} alt="icon bc power visa" />
                        </figure>
                        <span>bc power visa</span>
                    </li>
                </ul>

            </div>

        </section>
    )
}
export default SectionBuy