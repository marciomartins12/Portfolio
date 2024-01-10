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
        }, 500);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);

    return (
        <section className={Style.container}>
            <div>
                <p></p>
                <div>
                    <h3>{count0to1}</h3>
                    <p>year of experiences</p>
                </div>
                <div>
                    <h3>{Math.round(count0to12)}</h3>
                    <p>Finished projects</p>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default About;
