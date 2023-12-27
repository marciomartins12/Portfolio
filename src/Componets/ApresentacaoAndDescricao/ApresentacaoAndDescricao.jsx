import Style from "./ApresentacaoAndDescricao.module.css";

const ApresentacaoAndDescricao = () => {
    return (
        <section className={Style.container}>
            <div>
                <div className={Style.apresentacao}>
                    <h2>Desenvolvedor Web Full-Stack em Formação <img src="/src/assets/icons/lupadev.png" alt="lupa" /></h2>
                    <p>Olá! Sou Márcio, Meu comprometimento com a excelência reflete-se não apenas na busca constante por conhecimento, mas também na prática diária, desenvolvendo projetos pessoais e colaborando em iniciativas acadêmicas. Estou animado com a oportunidade de aplicar minhas habilidades em ambientes profissionais, contribuindo para projetos desafiadores e dinâmicos. Se você está em busca de um desenvolvedor web full-stack em formação, comprometido, curioso e ávido por desafios, estou pronto para fazer a diferença. Vamos criar algo incrível juntos!
                    </p>
                </div>
                <div className={Style.habilidades}>

                    <h3>Tooling:</h3>
                    <div>
                        <img src="/src/assets/icons/React.png" alt="React" />
                        <img src="/src/assets/icons/Javascript.png" alt="Javascript" />
                        <img src="/src/assets/icons/Html.png" alt="Html" />
                        <img src="/src/assets/icons/Css.png" alt="Css" />
                        <img src="/src/assets/icons/C.png" alt="C" />
                    </div>
                </div>
                <p className={Style.exp}><span>Experiência:</span>Apenas em Projetos pessoais.</p>
            </div>
            <section className={Style.sobremim}>
                <div>
                    <img className={Style.imgGif} src="./src/assets/gif.gif" alt="foto de Márcio José Martins Câmara" />
                    <button>sobre Mim <img src="/src/assets/icons/SobreMim.png" alt="sobre Mim icone" /></button>
                </div>
                <img className={Style.superman} src="/src/assets/icons/superman.png" alt="superman"/>

            </section>
        </section>
    );
};

export default ApresentacaoAndDescricao;