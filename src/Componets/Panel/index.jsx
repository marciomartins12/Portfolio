import { Link, useLocation } from "react-router-dom";
import Style from "./panel.module.css";
import { useEffect, useState } from "react";

const Panel = () => {
    const location = useLocation();
    const [pathCurrent, setpathCurrent] = useState('');

    useEffect(() => {
        setpathCurrent(location.pathname);
    }, [location]);

    console.log(pathCurrent);
    return (
        <div className={Style.container}>
            <Link to='/'>
                <div className={Style.divicon}>
                    {pathCurrent === "/" ?
                        <img src="/assets/img/homeenable.png" alt="home enable" /> :
                        <img src="/assets/img/home.png" alt="home" />
                    }
                    <p>Home</p>
                </div>
            </Link>
            <Link to='/aboutme'>
                <div className={Style.divicon}>
                    {pathCurrent === "/aboutme" ?

                        <img src="/assets/img/aboutmeenable.png" alt="about enable" /> :
                        <img src="/assets/img/aboutme.png" alt="about" />
                    }
                    <p>About me</p>
                </div>
            </Link>
            <Link to='/projects'>
                <div className={Style.divicon}>
                    {pathCurrent === "/projects" ?
                        <img src="/assets/img/projectenable.png" alt="project enable" /> :
                        <img src="/assets/img/project.png" alt="projects" />
                    }
                    <p>Projects</p>
                </div>
            </Link>
            <Link to='/contacts'>
                <div className={Style.divicon}>
                    {pathCurrent === "/contacts" ?
                        <img src="/assets/img/talkmeenable.png" alt="talk me enable" /> :
                        <img src="/assets/img/talkme.png" alt="talkme" />
                    }
                    <p>Contacts</p>
                </div>
            </Link>
        </div>
    );

};

export default Panel;