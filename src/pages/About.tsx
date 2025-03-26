import { useTranslation } from "react-i18next";
import ScrollDownButton from "@components/ScrollDownButton.tsx";

const About = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className="d-flex align-items-center justify-content-center vh-100" id="aboutMe">
                <div className="row container d-flex align-items-center justify-content-center">

                    <div id="aboutText" className="col-12 col-lg-7 order-2 order-lg-1">
                        <h1 className="title-secondary"> {t("about.hey")}</h1>
                        <h1 className="title-primary"> {t("about.i'm")} Daniel Amaya.</h1>
                    </div>

                    <div id="aboutImage" className="col-8 col-lg-5 order-1 order-lg-2 mb-lg-0 mb-5">
                        <img
                            src="@assets/images/life.gif"
                            alt="Profile"
                            className="img-fluid rounded-circle"
                        />
                    </div>
                </div>
                <ScrollDownButton toSection="ofMe" />
            </section>

            <section className="d-flex justify-content-center p-2 mb-5" id="ofMe">
                <div className="container">
                    <h1 className="title-primary text-center mb-4" data-aos="fade-up"> {t("about.aboutMe")}</h1>
                    <h3 className="subtitle-secondary" data-aos="fade-right">{t("about.whoAmI")}</h3>
                    <p className="paragraph-primary mb-5" data-aos="fade-up">
                        {t("about.paragraphWhoAmI")}
                    </p>
                    <h3 className="subtitle-secondary mt-4" data-aos="fade-right">{t("about.whatILove")}</h3>
                    <p className="paragraph-primary mb-5" data-aos="fade-up">
                        {t("about.paragraphWhatILove")}
                    </p>
                    <h3 className="subtitle-secondary mt-4 text-center" data-aos="zoom-in">{t("techStack.myTechStack")}</h3>
                    <div className="container mt-3">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                            {/* Backend */}
                            <div className="col" data-aos="flip-left">
                                <div className="custom-card text-center p-3">
                                    <h5 className="card-title mb-3">{t("techStack.backend")}</h5>
                                    <div className="card-body">
                                        <i className="devicon-java-plain fs-1 mx-3"></i>
                                        <i className="devicon-spring-plain fs-1 mx-3"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Frontend */}
                            <div className="col" data-aos="flip-left">
                                <div className="custom-card text-center p-3">
                                    <h5 className="card-title mb-3">{t("techStack.frontend")}</h5>
                                    <div className="card-body">
                                        <i className="devicon-react-original fs-1 mx-3"></i>
                                        <i className="devicon-bootstrap-plain fs-1 mx-3"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Bases de Datos */}
                            <div className="col" data-aos="flip-left">
                                <div className="custom-card text-center p-3">
                                    <h5 className="card-title mb-3">{t("techStack.dataBases")}</h5>
                                    <div className="card-body">
                                        <i className="devicon-mysql-plain fs-1 mx-3"></i>
                                        <i className="devicon-postgresql-plain fs-1 mx-3"></i>
                                    </div>
                                </div>
                            </div>
                            {/* APIs y Microservicios */}
                            <div className="col" data-aos="flip-left">
                                <div className="custom-card text-center p-3">
                                    <h5 className="card-title mb-3">{t("techStack.apisAndMicroservices")}</h5>
                                    <div className="card-body">
                                        <i className="devicon-docker-plain fs-1 mx-3"></i>
                                        <i className="devicon-postman-plain fs-1 mx-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;