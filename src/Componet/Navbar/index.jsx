import { Link, Outlet} from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const active = window.location.pathname;
    console.log(active);
    return (
    <>
    <ul className="nav justify-content-center  ">
        <li className="nav-item">
            <Link to= "/" className={`nav-link item-lista ${active === "/"? "ativo": ""}`} aria-current="page" >Início</Link>
        </li>
        <li className="nav-item">
            <Link to= "projetos" className={`nav-link item-lista ${active === "projetos"? "ativo": ""}`}  >Projetos</Link>
        </li>
        <li className="nav-item">
            <Link to= "contatos" className={`nav-link item-lista ${active === "contatos"? "ativo": ""}`}  >Contatos</Link>
        </li>
    </ul>
    <Outlet/>
    
    </>
    );
};

export default Navbar;