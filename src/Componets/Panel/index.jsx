import { Link, useLocation } from "react-router-dom";
import Style from "./panel.module.css";
import { useEffect, useState } from "react";

const Panel = () => {
    const location = useLocation();
    const [pathCurrent, setpathCurrent] = useState('');

    useEffect(() => {
        setpathCurrent(location.pathname);
    }, [location]);


    return (
        <div className={Style.containerpanel}>
            <Link div className={Style.divicon} to='/'>

                {pathCurrent === "/" ?
                    <img src="/assets/img/homeenable.png" alt="home enable" /> :
                    <img src="/assets/img/home.png" alt="home" />
                }
                <p>Home</p>

            </Link>
            <Link div className={Style.divicon} to='/aboutme'>

                {pathCurrent === "/aboutme" ?
                    <img src="/assets/img/aboutmeenable.png" alt="about enable" /> :
                    <img src="/assets/img/aboutme.png" alt="about" />
                }
                <p>About me</p>

            </Link>
            <Link div className={Style.divicon} to='/projects'>

                {pathCurrent === "/projects" ?
                    <img src="/assets/img/projectenable.png" alt="project enable" /> :
                    <img src="/assets/img/project.png" alt="projects" />
                }
                <p>Projects</p>

            </Link>
            <Link className={Style.divicon} to='/contacts'>

                {pathCurrent === "/contacts" ?
                    <img src="/assets/img/talkmeenable.png" alt="talk me enable" /> :
                    <img src="/assets/img/talkme.png" alt="talkme" />
                }
                <p>Contacts</p>

            </Link>
        </div>
    );

};

export default Panel;