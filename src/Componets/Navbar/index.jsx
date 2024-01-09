import Style from "./navbar.module.css";

const NavBar = () => {
    return (
        <nav className={Style.navBar}>
            <h1>Márcio<span>Martins.</span></h1>
            <div>
                <img src="/assets/img/instagram.png" alt="logo instagram" />
                <img src="/assets/img/facebook.png" alt="logo facebook" />
                <img src="/assets/img/github.png" alt="logo github" />
            </div>
            
        </nav>
    );
};
export default NavBar;