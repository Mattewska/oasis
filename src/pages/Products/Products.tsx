import gallinas from "../../assets/gallinas1.jpeg"
import galpon from "../../assets/galpon1.jpeg"
import patos from "../../assets/patos1.jpeg"
import vacas from "../../assets/vacas1.jpeg"
import piscicultura from "../../assets/piscicultura1.jpeg"
import "./Products.css"

function Products() {
    return (
        <main className="content">
            <section className="products">
                <figure className="imgSelector">
                    <img className="item" src={gallinas} alt="" />
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={galpon} alt="" />
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={patos} alt="" />
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={vacas} alt="" />
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={piscicultura} alt="" />
                </figure>
            </section>
        </main>
    )
}
export default Products