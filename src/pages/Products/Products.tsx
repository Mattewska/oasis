import gallinas from "../../assets/gallinas1.jpeg"
import galpon from "../../assets/galpon1.jpeg"
import patos from "../../assets/patos1.jpeg"
import vacas from "../../assets/vacas1.jpeg"
import piscicultura from "../../assets/piscicultura1.jpeg"

function Products() {
    return (
        <main className="content">
            <section>
                <div className="imgDescriptionContainer">
                    <figure className="imgselector"><img src={gallinas} alt="gallinas" /></figure>
                </div>
                <div className="imgDescriptionContainer">
                    <figure className="imgselector"><img src={galpon} alt="galpon" /></figure>
                </div>
                <div className="imgDescriptionContainer">
                <figure className="imgselector"><img src={patos} alt="patos" /></figure>
                </div>
                <div className="imgDescriptionContainer">
                <figure className="imgselector"><img src={vacas} alt="vacas" /></figure>
                </div>
                <div className="imgDescriptionContainer">
                    <figure className="imgselector"><img src={piscicultura} alt="piscicultura" /></figure>
                </div>
            </section>
        </main>
    )
}
export default Products