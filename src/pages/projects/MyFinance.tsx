import Footer from "@components/Footer";
import { SimpleNavBar } from "@components/Navbar";

const MyFinance = () => {

    return (
        <>
            <SimpleNavBar />

            <main className="container" style={{ marginTop: "90px" }}>
                <div className="image-container-project">
                    <img
                        className="img-fluid image-project"
                        src={`/projects/MyFinance.png`}
                        alt={"MyFinance Logo"}
                    />
                </div>
            </main>

            <footer className="bg-footer py-3">
                <Footer />
            </footer>
        </>

    );
};

export default MyFinance;
