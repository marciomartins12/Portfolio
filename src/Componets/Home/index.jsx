import { Link } from "react-router-dom";
import Style from "./home.module.css";
import Part from "../Particles";
const Home = () => {
    return (

        <section className={Style.containerhome}>
            <div>
                <h2>I am a Developer web.</h2>
                <p>I build <span className={Style.span}>things for web.</span></p>
                <div className={Style.descricao}>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit quod expedita!
                    </span>
                </div>

                <Link to="/aboutme" className={Style.containerbtn}>
                    <div className={Style.center}>
                        <button className={Style.btn}>
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className={Style.border}>
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className={Style.bgline} />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className={Style.hlline} />
                            </svg>
                            <span>My projects</span>
                        </button>
                    </div>
                </Link>
            </div>

            <img src="/assets/img/homepage.svg" alt="homepage" />
            <Part />

        </section>
    );
};

export default Home;