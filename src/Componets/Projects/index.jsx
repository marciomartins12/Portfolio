
import Style from "./projects.module.css";

const Projects = () => {
    return (
        <section className={Style.container}>
            <div>
                <h2>My projects
                    <span>.</span>
                </h2>
                <p>In my portfolio, I exclusively highlight personal projects. These creations reflect not only my technical skills, but also the passion I have for constantly learning and evolving.</p>

            </div>
            <div>
                <div className={Style.divimg}>
                    <div className={Style.containerImgs}>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/alurabooks.png" alt="" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>
                        <div className={Style.div}>
                            <img src="/assets/imgProjects/estacaosuplemento.png" alt="" />
                            <div className={Style.title}>
                                <a href="#" target="_blank">Live project</a>
                            </div>
                        </div>
                    </div>
                    <div className={Style.containerImgs}>
                        <img src="/assets/imgProjects/test.jpg" alt="" />
                        <img src="/assets/imgProjects/test.jpg" alt="" />


                    </div>
                    <button>-{">"}</button>
                    <button>{"<"}-</button>
                </div>
            </div>

        </section>
    );
};

export default Projects;