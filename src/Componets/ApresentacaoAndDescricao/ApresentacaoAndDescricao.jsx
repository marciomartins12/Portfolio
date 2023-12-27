import { useState } from "react";
import Style from "./ApresentacaoAndDescricao.module.css";

const ApresentacaoAndDescricao = () => {
    const [click, setclick] = useState(false);
    const sobremim = () => {
        setclick(true)
    };
    const removeClick=()=>{
        setclick(false);
    };


    return (
        <section className={Style.container}>
            <div>
                <div className={Style.apresentacao}>
                    <h2> <img className={Style.img2} src="/src/assets/icons/lupadev.png" alt="lupa" />Desenvolvedor Web Full-Stack em Formação <img src="/src/assets/icons/lupadev.png" alt="lupa" /></h2>
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
                    <button onClick={() => { sobremim() }}>sobre Mim <img src="/src/assets/icons/SobreMim.png" alt="sobre Mim icone" /></button>
                </div>
                <img className={Style.superman} src="/src/assets/icons/superman.png" alt="superman" />

            </section>{click?
            <div className={Style.descricaominha}>
                <p>Meu nome é Márcio José Martins Câmara, tenho 21 anos, sou de Peri-Mirim, Maranhão. Atualmente estou morando em São Luís, Maranhão, por conta do curso de Ciência da Computação.Sou capoeirista e enxergo na capoeira não apenas uma prática física, mas uma expressão cultural e uma forma de conexão com a tradição. Além disso, sou um entusiasta de jogos. A combinação de criatividade e lógica, encontrada tanto na capoeira quanto nos jogos, reflete minha abordagem eclética ao aprendizado.Há aproximadamente 7 meses, mergulhei no fascinante campo do desenvolvimento frontend. Minha jornada tem sido marcada pela dedicação a projetos pessoais, nos quais pude aplicar e consolidar os conhecimentos adquiridos ao longo desse período.
                    Nesse curto intervalo de tempo, experimentei desafios estimulantes e conquistas gratificantes, moldando minha visão sobre o desenvolvimento de interfaces e a importância do usuário final. Embora minha jornada seja ainda incipiente, a paixão pela criação visual e pela interação amigável impulsiona meu crescimento diário.</p>
                    <button onClick={()=>removeClick()}>x</button>
            </div>:<></>}
        </section>
    );
};

export default ApresentacaoAndDescricao;