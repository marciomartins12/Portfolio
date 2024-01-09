import { Link } from "react-router-dom";
import Style from "./home.module.css";
const Home = () => {
    return (
        <section className={Style.container}>
            <div>
                <h2>I am a Developer web.</h2>
                <p>I build things for web.</p>
                <Link className={Style.btn}to="/works">My projects</Link>
            </div>

            <img src="/assets/img/homepage.svg" alt="homepage" />

        </section>
    );
};

export default Home;