import { useTranslation } from "react-i18next";
import Projects from "../components/Projects";
import ScrollDownButton from "../components/ScrollDownButton";

const Work = () => {

  const { t } = useTranslation();

  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center vh-100"
        id="home"
      >
        <div className="container">
          <h1 className="title-primary" data-aos="fade-down">
            Daniel Amaya Montes
          </h1>
          <h1 className="title-secondary" data-aos="fade-right">
            {t("general.title")}
          </h1>
        </div>
        <ScrollDownButton toSection="projects" />

      </section>

      <section className="d-flex justify-content-center mb-5" id="projects">
        <div className="container">
          <h1 className="title-primary text-center mb-4" data-aos="fade-up" data-aos-duration="500">
            {t("general.projectsTitle")}
          </h1>
          <div className="row justify-content-center">
            <Projects
              img={"MyFinance.png"}
              alt={"Image of MyFinance project"}
              title={t("projects.myfinance.title")}
              description={t("projects.myfinance.description")}
              data-aos="flip-left"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
