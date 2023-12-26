import Item from "./Item";
import lista from "./projetos";
import Style from "./secaosites.module.css";
const Projects = () => {
    return (
        <section >
            <div className={Style.cabecalhoPageProjects}>
                <h3>Projetos</h3>
                <p>Estes projetos são projetos pessoais</p>
                <div>
                    <input type="search" name="Pesquisar" id="1" />
                    <button>
                        <img src="/src/assets/icons/Search.png" alt="search" />
                    </button>
                </div>
            </div>
            <div className={Style.Projects}>
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
            </div>
        </section>
    );
};
export default Projects;