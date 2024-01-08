import { Link } from "react-router-dom";
import "./inicio.css";


const Inicio = () => {

    return (
        <section className="container-inicio">
            <div>
                <div>
                    <h2>Hello! my name is Márcio</h2>
                    <h1>I am a developer web</h1>
                    <p>I build things for web</p>
                </div>
                <Link className="btn" to="/sobremim">
                    About me
                </Link>
            </div>
            <div>

                <img src="/src/assets/img/Code typing-pana 1(1).png" alt="" />


            </div>
        </section>
    );
};

export default Inicio;