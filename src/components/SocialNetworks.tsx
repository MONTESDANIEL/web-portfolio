import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SocialNetworks = () => {

    const { t } = useTranslation();

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector("footer");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
        );

        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    if (isFooterVisible) {
        return null;
    }

    return (
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/daniel-amaya-montes/" target="_blank" rel="noopener noreferrer" className="icon-link mb-3">
                <div className="icon-content">
                    <span className="icon-text">LinkedIn</span>
                    <i className="bi bi-linkedin"></i>
                </div>
            </a>

            <a href="https://github.com/MONTESDANIEL" target="_blank" rel="noopener noreferrer" className="icon-link mb-3">
                <div className="icon-content">
                    <span className="icon-text">GitHub</span>
                    <i className="bi bi-github"></i>
                </div>
            </a>

            <a href="mailto:danielamayamontes8@gmail.com?subject=Oportunidad%20de%20trabajo&body=Hola%20Daniel," target="_blank" rel="noopener noreferrer" className="icon-link mb-3">
                <div className="icon-content">
                    <span className="icon-text">{t("contact.email")}</span>
                    <i className="bi bi-envelope-fill"></i>
                </div>
            </a>

            <a href="/HvFullStack.pdf" download="Daniel_Amaya_Resume.pdf" className="icon-link">
                <div className="icon-content">
                    <span className="icon-text">{t("contact.resume")}</span>
                    <i className="bi bi-file-earmark-pdf-fill"></i>
                </div>
            </a>
        </div>

    );
};

export default SocialNetworks;
