import Style from "./Item.module.css";
const Item = ({ img, nome, descricao, disponivel, tecnologiausada, link }) => {
    return (
        <div className={Style.itemcontainer}>
            <div className={Style.parte1}>
                <img className={Style.imagemprojeto} src={img} alt={nome} />
                <span className={Style.disponivelspan}> Disponivel:

                    {disponivel.map((item) => {
                        return (<img key={item} src={item} alt={nome} />)
                    })}

                </span>
            </div>
            <div className={Style.parte2}>
                <h3>{nome}</h3>
                <div className={Style.descricaoitem}>
                    <p>{descricao}</p>
                </div>
                <div className={Style.btnandtec}>
                    <button><a href={link}>Abrir</a></button>
                    <div>
                        {tecnologiausada.map((item) => {
                            return <img key={item} src={item} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Item;