import Item from "./Item";
import lista from "./projetos";
import Style from "./secaosites.module.css";
const Projects = () => {
    return (
        <section>
            <div className={Style.sites}>
                {lista.map((itemDaLista) => {
                    return (
                        <Item
                            key={itemDaLista.nome}
                            img={itemDaLista.img}
                            nome={itemDaLista.nome}
                            descricao={itemDaLista.descricao}
                            disponivel={itemDaLista.disponivel}
                            tecnologiausada={itemDaLista.tecnologiaUsada}
                            link={itemDaLista.link}
                        />
                    )
                })}
            </div>
        </section>
    );
};
export default Projects;