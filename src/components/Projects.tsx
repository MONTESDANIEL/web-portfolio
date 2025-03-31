const Projects = ({ img = "", alt = "", title = "", description = "", redirectTo = "" }) => {
    const basePath = "/projects/";

    const handleRedirect = () => {
        window.location.href = redirectTo;
    }

    return (
        <div className="container my-5">
            <h1 onClick={handleRedirect} className="subtitle-secondary title-project" data-aos="fade-right">
                {title} <i className="bi bi-arrow-right icon-title-project"></i>
            </h1>
            <p className="paragraph-primary text-start mb-4" data-aos="fade-up">{description}</p>
            <div className="image-container-project" data-aos="zoom-in" onClick={handleRedirect}>
                <img
                    className="img-fluid image-project"
                    src={`${basePath}${img}`}
                    alt={alt}
                />
            </div>
        </div>
    );
};

export default Projects;
