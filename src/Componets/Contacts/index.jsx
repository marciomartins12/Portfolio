import Style from "./contacts.module.css";

const Contacts = () => {
    return (
        <section className={Style.cont}>
            <h2>Talk t<span>o me</span></h2>
            <div className={Style.containercontacts}>
                <form>
                    <div className={Style.containerinputs}>
                        <input type="text" placeholder="Name" />
                        <textarea className={Style.textarea} placeholder="Message" />
                    </div>
                    <button>Enviar</button>
                </form>
                <div>
                    <h3>Social networks:</h3>
                    <div>
                        <img src="/assets/img/instagram.png" alt="instagram logo" />
                        <img src="/assets/img/facebook.png" alt="facebook logo" />
                        <img src="/assets/img/whatsapp.png" alt="whatsapp web" />
                        <img src="/assets/img/github.png" alt="github logo" />
                    </div>
                    <h3>Contacts:</h3>
                    <p>mmarciom1martins635@gmail.com</p>
                    <p>55 98981024732</p>

                </div>
            </div>
        </section>
    );
};

export default Contacts;