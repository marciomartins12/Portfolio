import { Outlet } from "react-router-dom";
import NavBar from "../Navbar";
import Panel from "../Panel";

const DefaultPage = () => {
    return (
       <section>
        <NavBar/>
        <Panel/>
        <Outlet/>
       </section>
    );
};
export default DefaultPage;