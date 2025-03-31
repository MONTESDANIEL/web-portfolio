import ThemeBtn from "@components/ThemeBtn";
import { useTranslation } from "react-i18next";
import LanguageBtn from "./LanguajeBtn";

export const HomeNavBar = () => {

    const { t } = useTranslation();

    return (
        <nav className="navbar-blur">
            <div className="d-flex justify-content-center align-items-center">
                <ThemeBtn />
                <div className="vr mx-2"></div>
                <LanguageBtn />
            </div>

            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item mx-2" role="presentation">
                    <a
                        className="btn-navbar active"
                        id="work-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#work-section"
                        role="tab"
                        aria-controls="work-section"
                        aria-selected="true"
                    >
                        {t("about.workTitle")}
                    </a>
                </li>

                <li className="nav-item  mx-2" role="presentation">
                    <a
                        className="btn-navbar"
                        id="about-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#about-section"
                        role="tab"
                        aria-controls="about-section"
                        aria-selected="false"
                    >
                        {t("about.aboutTitle")}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export const SimpleNavBar = () => {
    return (
        <nav className="navbar-blur">
            <div className="d-flex justify-content-center align-items-center">
                <ThemeBtn />
                <div className="vr mx-2"></div>
                <LanguageBtn />
            </div>
        </nav>
    );
};
