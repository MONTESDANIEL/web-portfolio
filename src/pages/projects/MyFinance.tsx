import Footer from "@components/Footer";
import { SimpleNavBar } from "@components/Navbar";
import Aos from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Feature {
    title: string;
    features: string[];
}

const MyFinance = () => {
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
            mirror: false,
        });
    }, []);

    const features = t("projects.myfinance.features", { returnObjects: true });

    console.log("Features data:", features); // Ver qué devuelve

    // Si no es un objeto válido, usa un objeto vacío
    const validFeatures = features && typeof features === "object" ? features : {};

    return (
        <>
            <SimpleNavBar />

            <main className="container mb-5" style={{ marginTop: "120px" }}>
                <section className="mb-5">
                    <div className="image-container-project mb-5">
                        <img
                            className="img-fluid mb-4"
                            style={{ transform: "scale(1.5)" }}
                            src={`/projects/MyFinance.png`}
                            alt={t("projects.myfinance.title")}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/MONTESDANIEL/myfinance" className="btn-github-project">
                            <span>{t("general.viewOnGitHub")}</span>
                            <i className="bi bi-github ms-2"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div>
                        <h1 className="subtitle-secondary" data-aos="fade-right">{t("projects.myfinance.title")}</h1>
                        <p className="paragraph-primary text-start mb-4" data-aos="fade-up">
                            {t("projects.myfinance.description")}
                        </p>
                    </div>

                    <h1 className="subtitle-secondary mt-4" data-aos="fade-right">{t("projects.myfinance.technologiesUsed")}</h1>
                    <div className="d-flex justify-content-center mb-4" data-aos="zoom-in">
                        <div className="col text-center p-3">
                            <div className="card-body">
                                <i className="devicon-react-original fs-1 mx-4"></i>
                                <i className="devicon-spring-original fs-1 mx-4"></i>
                                <i className="devicon-mysql-original fs-1 mx-4"></i>
                                <i className="devicon-bootstrap-plain fs-1 mx-4"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="subtitle-secondary" data-aos="fade-right">{t("projects.myfinance.features.title")}</h1>

                        {/* Incluir welcomeInterface manualmente si existe */}
                        {"welcomeInterface" in validFeatures && typeof validFeatures.welcomeInterface === "string" && (
                            <div data-aos="fade-up" className="mb-4">
                                <h2 className="paragraph-primary mb-1">{t("projects.myfinance.features.welcomeInterface")}</h2>
                            </div>
                        )}

                        {/* Filtramos solo los objetos que tienen 'features' */}
                        {Object.entries(validFeatures)
                            .filter(([_, feature]) => typeof feature === "object" && "features" in feature)
                            .map(([key, feature]: [string, Feature]) => (
                                <div data-aos="fade-up" className="mb-4" key={key}>
                                    <h2 className="paragraph-primary mb-1">{feature.title}</h2>
                                    <ul>
                                        {feature.features.map((item: string, index: number) => (
                                            <li className="paragraph-secondary" key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </section>
            </main>

            <footer className="bg-footer py-3">
                <Footer />
            </footer>
        </>
    );
};

export default MyFinance;
