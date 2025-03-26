const Projects = ({ img = "", alt = "", title = "", description = "" }) => {
    const basePath = "/src/assets/images/projects/";

    return (
        <div className="container my-5">
            <h1 className="subtitle-secondary text-start mb-3" data-aos="fade-right">
                {title} <i className="bi bi-arrow-right"></i>
            </h1>
            <p className="paragraph-primary text-start mb-4" data-aos="fade-up">{description}</p>
            <div className="image-container-project" data-aos="zoom-in">
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
