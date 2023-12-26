import ApresentacaoAndDescricao from "../ApresentacaoAndDescricao/ApresentacaoAndDescricao";
import Cabecalho from "../Header/Cabecalho";
import Style from "./PaginaPrinccipal.module.css";

const PaginaPrincipal = () => {

    return (
        <section className={Style.paginaPrincipalContainer}>
            <Cabecalho />
            <ApresentacaoAndDescricao />
        </section>);

};
export default PaginaPrincipal;