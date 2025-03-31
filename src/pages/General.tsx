import { useEffect } from "react";
import Footer from "@components/Footer";
import { HomeNavBar } from "@components/Navbar";
import About from "./About";
import Work from "./Work";
import Aos from "aos";

const General = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
            mirror: false,
        });

        const handleTabChange = () => {
            window.scrollTo(0, 0);
            Aos.refresh();
        };

        const pills = document.querySelectorAll('[data-bs-toggle="pill"]');
        pills.forEach(pill => pill.addEventListener("shown.bs.tab", handleTabChange));

        return () => {
            pills.forEach(pill => pill.removeEventListener("shown.bs.tab", handleTabChange));
        };
    }, []);


    return (
        <>
            <HomeNavBar />

            <main className="container flex-grow-1 tab-content" id="pills-tabContent">
                <section
                    key="work"
                    id="work-section"
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="work-tab"
                >
                    <Work />
                </section>

                <section
                    key="about"
                    id="about-section"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                >
                    <About />
                </section>
            </main>

            <footer className="bg-footer py-3">
                <Footer />
            </footer>
        </>

    );
};

export default General;
