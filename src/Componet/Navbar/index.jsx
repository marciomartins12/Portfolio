import { Link, Outlet, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
    document.body.style.backgroundColor = "#0F0F0F";
    const location = useLocation();
    const [active, setactive] = useState(location.pathname);


    useEffect(() => {
        setactive(location.pathname);
    }, [location.pathname]);

    return (
        <main className="main">
            <ul className="nav justify-content-center  ">
                {/* <li className="nav-item mt-3">
                    <Link to="#" className={`m-3 item-lista ${active === "/" ? 'ativo' : ""}`}  >Início</Link>
                </li> */}
                <li className="nav-item mt-3">
                    <Link to="/" className={`m-3 item-lista ${active === "/" ? 'ativo' : ""}`}  >Início</Link>
                </li>
                <li className="nav-item mt-3">
                    <Link to="projetos" className={`m-3 item-lista ${active === "/projetos" ? 'ativo' : ""}`}  >Projetos</Link>
                </li>
                <li className="nav-item mt-3">
                    <Link to="contatos" className={`m-3 item-lista ${active === "/contatos" ? 'ativo' : ""}`}  >Contatos</Link>
                </li>
            </ul>
            <Outlet/>

        </main>
    );
};

export default Navbar;