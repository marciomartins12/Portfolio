import Style from "./Item.module.css";

const Item = ({ img, nome, descricao, disponivel, tecnologiausada, link }) => {
    return (
        <div className={Style.container}>

            <div className={Style.parte1}>
                <img className={Style.img1}src={img} alt={nome} />
                <div>
                <p>Disponivel:</p>
                {disponivel.map((item, indice) => <img key={indice} src={item} alt="icones de dispositivos disponíveis" />)}
                </div>

            </div>
            <div className={Style.parte2}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <div>
                    <a href={link}>Abrir</a>
                    {tecnologiausada.map((item, indice) => <img key={indice} src={item} alt="icone de tecnologias usadas" />)}
                </div>
            </div>
            
        </div>
    );
};
export default Item;