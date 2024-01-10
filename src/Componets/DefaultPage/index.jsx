import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";
import Panel from "../Panel";
import Style from "./defaultpage.module.css";
const DefaultPage = () => {
    return (
        <section className={Style.containerfull}>
            <NavBar />
            <Panel />
            <div className={Style.content}>
                <Outlet />
            </div>
        </section>
    );
};
export default DefaultPage;