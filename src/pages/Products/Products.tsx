import gallinas from "../../assets/gallinas1.jpeg"
import galpon from "../../assets/galpon1.jpeg"
import patos from "../../assets/patos1.jpeg"
import vacas from "../../assets/vacas1.jpeg"
import piscicultura from "../../assets/piscicultura1.jpeg"
import "./Products.css"

function Products() {
    return (
        <main className="content">
            <h1>Categorías de Productos</h1>
            <section className="products">
                <figure className="imgSelector">
                    <img className="item" src={gallinas} alt="gallinas" />
                    <p>gallinas</p>
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={galpon} alt="galpon" />
                    <p>galpon</p>
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={patos} alt="patos" />
                    <p>patos</p>
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={vacas} alt="vacas" />
                    <p>vacas</p>
                </figure>
                <figure className="imgSelector">
                    <img className="item" src={piscicultura} alt="piscicultura" />
                    <p>piscicultura</p>
                </figure>
            </section>
        </main>
    )
}
export default Products