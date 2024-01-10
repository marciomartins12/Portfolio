
import Style from "./projects.module.css";

const Projects = () => {
    return (
        <section className={Style.container}>
            <div>
                <h2>My projects
                    <span>.</span>
                </h2>
                <p className={Style.description}>I exclusively <span>highlight personal</span> projects. These creations reflect not only my technical skills, but also the passion I have for constantly learning and evolving.</p>

            </div>
            <div>
                <div className={Style.divimg}>
                    <div className={Style.containerImgs}>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/alurabooks.png" alt="alura books img" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/estacaosuplemento.png" alt="estação suplementos img" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>
                    </div>
                    <div className={Style.containerImgs}>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/fraudebank.png" alt="fraude bank img" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/chat.png" alt="chat img" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>

                    </div>
                    <div className={Style.buttondiv}>
                        <button className={Style.button}><img src="/assets/img/buttonenable.png" alt="button enable" /></button>
                        <button className={Style.button}><img src="/assets/img/button.png" alt="button enable" /></button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Projects;