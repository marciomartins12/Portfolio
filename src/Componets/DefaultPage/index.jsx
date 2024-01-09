import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";
import Panel from "../Panel";
import Style from "./defaultpage.module.css";
const DefaultPage = () => {
    return (
       <section className={Style.containerfull}>
        <NavBar/>
        <Panel/>
        <Outlet/>
       </section>
    );
};
export default DefaultPage;