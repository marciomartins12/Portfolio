import React, { useState, useEffect } from 'react';
import Style from './aboutme.module.css';

const About = () => {
    const [click, setclick] = useState("skills")
    const handleclick = (text) => {
        setclick(text);
    };
    const [count0to1, setCount0to1] = useState(0);
    const [count0to12, setCount0to12] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCount0to1((prevCount) => (prevCount < 1 ? prevCount + 1 : 1));
        }, 1000);

        const interval2 = setInterval(() => {
            setCount0to12((prevCount) => (prevCount < 12 ? prevCount + 1 : 12));
        }, 300);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);

    return (
        <section className={Style.containerabout}>
            <div className={Style.firstcontainer}>
                <h2>I<span>'</span>m Marcio Martins<span>.</span></h2>
                <p className={Style.describle}>I'm 21 years old and I live in São Luís. I'm studying Computer Science and I love programming. I'm always learning something new and applying my knowledge to interesting projects. I'm passionate about the world of technology and I can't wait to see what the future holds<span>.</span>
                </p>
                <div className={Style.containercountandtext}>
                    <div className={Style.countandtext}>
                        <h3>{count0to1}+</h3>
                        <p>year of experiences</p>
                    </div>
                    <div className={Style.countandtext}>
                        <h3>{Math.round(count0to12)}+</h3>
                        <p>Finished projects</p>
                    </div>
                </div>
            </div>
            <div className={Style.twocontainer}>
                <nav className={Style.nav}>
                    <button className={click === "skills" ? Style.ativo : Style.navbutton} onClick={() => handleclick("skills")}>Skills</button>
                    <button className={click === "credentials" ? Style.ativo : Style.navbutton} onClick={() => handleclick("credentials")}>Credentials</button>
                    <button className={click === "experiences" ? Style.ativo : Style.navbutton} onClick={() => handleclick("experiences")}>Expereinces</button>
                </nav>

                <div className={Style.containerconteudo}>

                    {click === "skills" ?
                        <div>
                            <div className={Style.divconteudo}>
                                <p>Developer</p>
                                <p>-</p>
                                <div className={Style.divimgicons}>
                                    <div><img src="/assets/img/react.png" alt="icon" /></div>
                                    <div><img src="/assets/img/js.png" alt="icon" /></div>
                                    <div><img src="/assets/img/python.png" alt="icon" /></div>
                                    <div><img src="/assets/img/html.png" alt="icon" /></div>
                                    <div><img src="/assets/img/sql.png" alt="icon" /></div>
                                    <div><img src="/assets/img/css.png" alt="icon" /></div>
                                    <div><img src="/assets/img/php.png" alt="icon" /></div>
                                    <div><img src="/assets/img/c.png" alt="icon" /></div>
                                </div>
                            </div>
                        </div>
                        : <></>}


                    {click === "credentials" ? <div>
                        <div className={Style.divconteudo}>
                            <p>Undergraduate</p>
                            <p>-</p>
                            <p>Computer Science</p>
                        </div>
                        <div className={Style.divconteudo}>
                            <p>Completed courses</p>
                            <p>-</p>
                            <a target="_blank" href="https://cursos.alura.com.br/user/marciom1martins635/fullCertificate/ec4a9e4212cf8ec94ce64ff1cee49545">click me <img src="/assets/img/doc.png" alt="doc img" /></a>
                        </div>
                        <div className={Style.divconteudo}>
                            <p>CV</p>
                            <p>-</p>
                            <a target="_blank" href="#">click me <img src="/assets/img/doc.png" alt="doc img" /></a>
                        </div>
                    </div>
                        : <></>}

                    {click === "experiences" ?
                        <div>
                            <div className={Style.divconteudo}>
                                <p>Projects</p>
                                <p>-</p>
                                <p>
                                    My experience so far is centered on personal projects.
                                </p>
                            </div>
                            <div className={Style.divconteudo}>
                                <p>Explore</p>
                                <p>-</p>
                                <a href="github.com/marciomartins12">click me<img src="/assets/img/github.png" alt="github img" /></a>
                            </div>
                        </div>
                        : <></>}

                </div>

            </div>
        </section>
    );
};

export default About;
