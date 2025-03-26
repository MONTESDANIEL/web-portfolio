import { useEffect, useState } from "react";

const ScrollDownButton = ({ toSection = "", className = "" }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(toSection);
            if (section) {
                const rect = section.getBoundingClientRect();
                setIsVisible(
                    rect.bottom <= 0 || rect.top >= window.innerHeight
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [toSection]);

    const scrollToSection = () => {
        const section = document.getElementById(toSection);
        if (section) {
            const offset = 90;
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    return (
        isVisible && (
            <button
                className={`scroll-down-btn position-fixed bottom-0 start-50 translate-middle-x mb-5 ${className}`}
                onClick={scrollToSection}
                aria-label="Scroll Down"
            >
                <i className="bi bi-chevron-down"></i>
            </button>
        )
    );
};

export default ScrollDownButton;
