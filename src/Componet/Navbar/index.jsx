import { Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
    <>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link to= "" className="nav-link active" aria-current="page" >Início</Link>
        </li>
        <li className="nav-item">
            <Link to= "" className="nav-link" >Projetos</Link>
        </li>
        <li className="nav-item">
            <Link to= "" className="nav-link" >Contatos</Link>
        </li>
    </ul>
    <Outlet/>
    
    </>
    );
};

export default Navbar;