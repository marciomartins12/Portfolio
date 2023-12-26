import Style from "./Item.module.css";
const Item = ({ img, nome, descricao, disponivel, tecnologiausada, link }) => {
    return (
        <div className={Style.itemcontainer}>
            <div>
                <img src={img} alt={nome} />
                <span> Disponivel:
                     <div>
                        {disponivel.map((item) => {
                            return (<img key={item} src={item} alt={nome} />)
                        })}
                    </div> 
                </span>
            </div>
            <div>
                <h3>{nome}</h3>
                <div  className={Style.descricaoitem}>
                    <p>{descricao}</p>
                </div>
                <div>
                    <button><a href={link}>Abrir</a></button>
                    <div>
                        {tecnologiausada.map((item)=>{
                            return <img key={item} src={item}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Item;