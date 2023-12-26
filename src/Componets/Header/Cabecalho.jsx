import Style from "./Cabecalho.module.css";
const Cabecalho = () =>{
    return (
        <div className={Style.container}>
            <h2>
                Portifólio
            </h2>
            <div>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/icons/Gmail.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/icons/Whatsapp.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/icons/Github.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/icons/Instagram.png"/>
                </a>
                <a href="#" target="_blank">
                    <img className={Style.img} src="src/assets/icons/Facebook.png"/>
                </a>
            </div>
        </div>
    );
};

export default Cabecalho;