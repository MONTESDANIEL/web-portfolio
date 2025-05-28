import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 mb-4 d-flex aling-items-center justify-content-center">
                    <div >
                        <div>
                            <h5 className="subtitle-secondary text-center">{t("general.contactMe")}</h5>
                            <p>{t("contact.email")}: <a href="mailto:danielamayamontes8@gmail.com" className="paragraph-secondary ms-2">danielamayamontes8@gmail.com</a></p>
                            <p>{t("contact.phone")}: <a href="tel:+3054171043" className="paragraph-secondary ms-2">+57 305 417 1043</a></p>
                            <p>{t("contact.resume")}: <a href="/HvFullStack.pdf" download="Daniel_Amaya_Resume.pdf" className="paragraph-secondary ms-2">{t("contact.downloadResume")}</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4 d-flex aling-items-center justify-content-center">
                    <div className="">
                        <h5 className="subtitle-secondary text-center">{t("general.followMe")}</h5>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <a
                                href="https://github.com/tuusuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paragraph-secondary text-decoration-none"
                                aria-label="Linkedin">
                                <i className="bi bi-github fs-5"></i>
                                <span> Github</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/tuusuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paragraph-secondary text-decoration-none"
                                aria-label="Linkedin">
                                <i className="bi bi-linkedin fs-5"></i>
                                <span> LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-4">
                <div className="col text-center">
                    <p className="mb-0">© {new Date().getFullYear()} Daniel Amaya Montes</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;