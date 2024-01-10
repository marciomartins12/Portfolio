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
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <button>{"<"}-</button>
                <button>-{">"}</button>
            </div>

        </section>
    );
};

export default Projects;