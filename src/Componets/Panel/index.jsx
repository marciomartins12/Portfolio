import { Link } from "react-router-dom";
import Style from "./panel.module.css";
const Panel = () => {
    return (

    <div className={Style.container}>
        <Link className={Style.Btn} to='/home'><img src="/assets/img/home.png" alt="home" /></Link>
        <Link className={Style.Btn} to='/about me'><img src="/assets/img//aboutme.png" alt="about" /></Link>
        <Link className={Style.Btn} to='/Works'><img src="/assets/img/works.png" alt="projects" /></Link>
        <Link className={Style.Btn} to='/Contacts'><img src="/assets/img/talkme.png" alt="talkme" /></Link>
    </div>
    );

};

export default Panel;