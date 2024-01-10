import React, { useState, useEffect } from 'react';
import Style from './aboutme.module.css';

const About = () => {
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
        <section className={Style.container}>
            <div>
                <p className={Style.describle}>Hi, I'm Marcio José Martins Câmara, I'm 21 years old and I live in São Luís. I'm studying Computer Science and I love programming. I'm always learning something new and applying my knowledge to interesting projects. I'm passionate about the world of technology and I can't wait to see what the future holds
                </p>
                <div className={Style.containercountandtext}>
                    <div className={Style.countandtext}>
                        <h3>{count0to1}</h3>
                        <p>year of experiences</p>
                    </div>
                    <div className={Style.countandtext}>
                        <h3>{Math.round(count0to12)}+</h3>
                        <p>Finished projects</p>
                    </div>
                </div>
            </div>
            <div>
                <nav className={Style.nav}>
                    <button>Skills</button>
                    <button>Credentials</button>
                    <button>Expereinces</button>
                </nav>
                <div className={Style.divconteudo}>
                    <div>Developer</div>
                    -
                    <div className={Style.divimgicons}>
                        <div><img src="/assets/img/react.png" alt="icon" /></div>
                        <div><img src="/assets/img/js.png" alt="icon" /></div>
                        <div><img src="/assets/img/html.png" alt="icon" /></div>
                        <div><img src="/assets/img/css.png" alt="icon" /></div>
                        <div><img src="/assets/img/php.png" alt="icon" /></div>
                    </div>
                </div>


                <div></div>
                <div></div>



            </div>
        </section>
    );
};

export default About;
