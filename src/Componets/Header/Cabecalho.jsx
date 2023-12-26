import Style from "./Cabecalho.module.css";
const Cabecalho = () =>{
    return (
        <div className={Style.container}>
            <h2>
                Portifólio
            </h2>
            <div>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/Gmail.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/Whatsapp.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/Github.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/Instagram.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/Facebook.png"/>
                </a>
            </div>
        </div>
    );
};

export default Cabecalho;