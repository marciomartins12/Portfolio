import { useEffect } from "react";
import Style from "./Item.module.css";
import ScrollReveal from 'scrollreveal'

const Item = ({ img, nome, descricao, disponivel, tecnologiausada, link, efeito, indice }) => {
    useEffect(() => {

        const sr = ScrollReveal({ reset: true });
        
       
        sr.reveal(`.${Style[`a${indice}`]}`, {
          origin: 'right', 
          duration: 1000,
          distance: '100px',
          easing: 'ease-in-out',
        });
      }, []); 
    return (
        <div className={`${Style.container} ${Style[`a${indice}`]}`}>

            <div className={Style.parte1}>
                <img className={efeito ? Style.imgespecial : Style.img1} src={img} alt={nome} />
                <div>
                    <p>Disponivel:</p>
                    {disponivel.map((item, indice) => <img key={indice} src={item} alt="icones de dispositivos disponíveis" />)}
                </div>

            </div>
            <div className={Style.parte2}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <div>
                    <a href={link} target="_blank">Abrir</a>
                    {tecnologiausada.map((item, indice) => <img key={indice} src={item} alt="icone de tecnologias usadas" />)}
                </div>
            </div>

        </div>
    );
};
export default Item;