import { Link } from "react-router";
import { PublicRoutes } from "../../models";
import logo from '../../assets/OasisLogo.png'
import './header.css'

function header() {
    return (
        <header className="header">
            <figure className="logoImg"><img src={logo} alt="logo" /></figure>
            <ul className="links">
                <li><Link to={PublicRoutes.ABOUTME}>Sobre mi</Link></li>
                <li><Link to={PublicRoutes.PRODUCTS}>Productos</Link></li>
            </ul>
        </header>
    );
}
export default header;
