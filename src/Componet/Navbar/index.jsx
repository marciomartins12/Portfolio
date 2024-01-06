import { Link, Outlet, useLocation} from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
    const location = useLocation();
    const [active, setactive] = useState(location.pathname);

  
    useEffect(() => {
      setactive(location.pathname);
    }, [location.pathname]);

    return (
    <main className="main">
    <ul className="nav justify-content-center  ">
        <li className="nav-item">
            <Link to= "/" className={` item-lista ${active === "/"? 'ativo': ""}`}  >Início</Link>
        </li>
        <li className="nav-item">
            <Link to="projetos" className={` item-lista ${active === "/projetos"? 'ativo': ""}`}  >Projetos</Link>
        </li>
        <li className="nav-item">
            <Link to= "contatos" className={` item-lista ${active === "/contatos"? 'ativo': ""}`}  >Contatos</Link>
        </li>
    </ul>
    <Outlet/>
    
    </main>
    );
};

export default Navbar;