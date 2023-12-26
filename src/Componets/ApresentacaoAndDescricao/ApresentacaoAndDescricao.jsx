import Style from "./ApresentacaoAndDescricao.module.css";

const ApresentacaoAndDescricao = () => {
    return (
        <section className={Style.container}>
            <div>
                <div className={Style.apresentacao}>
                    <h2>Desenvolvedor Web Full-Stack em Formação</h2>
                    <p>Olá! Sou Márcio, um apaixonado por tecnologia e
                        estudante de Ciência da Computação. Estou com foco no
                        desenvolvimento web por enquanto.
                        Comprometido com o crescimento contínuo, buscando oportunidades de aprendizado e desenvolvimento.</p>
                </div>
                <div className={Style.habilidades}>
                    <h3>Habilidades:</h3>
                    <div>
                        <img src="/src/assets/icons/React.png" alt="React" />
                        <img src="/src/assets/icons/Javascript.png" alt="Javascript" />
                        <img src="/src/assets/icons/Html.png" alt="Html" />
                        <img src="/src/assets/icons/Css.png" alt="Css" />
                        <img src="/src/assets/icons/C.png" alt="C" />
                    </div>
                </div>
            </div>
            <section className={Style.sobremim}>
                <div>
                    <img className={Style.imgGif} src="./src/assets/gif.gif" alt="foto de Márcio José Martins Câmara" />
                    <button>sobre Mim <img src="/src/assets/icons/SobreMim.png" alt="sobre Mim icone" /></button>
                </div>
            </section>
        </section>
    );
};

export default ApresentacaoAndDescricao;