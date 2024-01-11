import Style from "./contacts.module.css";

const Contacts = () => {
    return (
        <section className={Style.cont}>
            <h2>Talk t<span>o me</span></h2>
            <div className={Style.containercontacts}>
                <form className={Style.containerpart1}>
                    <div className={Style.containerinputs}>
                        <input type="text" placeholder="Name" />
                        <textarea className={Style.textarea} placeholder="Message" />
                    </div>
                    <button>Enviar</button>
                </form>
                <div className={Style.containerpart2}>
                    <h3>Social networks:</h3>
                    <div className={Style.divnetworks}>
                        <img src="/assets/img/instagram.png" alt="instagram logo" />
                        <img src="/assets/img/facebook.png" alt="facebook logo" />
                        <img src="/assets/img/whatsapp.png" alt="whatsapp web" />
                        <img src="/assets/img/github.png" alt="github logo" />
                    </div>
                    <h4>Contacts:</h4>
                    <p>mmarciom1martins635@gmail.com</p>
                    <p>marciom1martins635@gmail.com</p>
                    <p>55 98981024732</p>

                </div>
            </div>
        </section>
    );
};

export default Contacts;