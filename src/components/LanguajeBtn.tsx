import React, { useState } from "react";
import i18n from "@utils/i18n";

const LanguageBtn: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleToggleLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "es" : "en";
        i18n.changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={handleToggleLanguage} className="btn-navbar">
                <i className="bi bi-translate"></i>
            </button>
        </div>
    );
};

export default LanguageBtn;