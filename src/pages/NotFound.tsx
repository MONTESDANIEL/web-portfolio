import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <section className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="title-secondary text-center">404</h1>
                <h2 className="mb-3">Página No Encontrada</h2>
                <p className="lead">
                    Lo sentimos, la página que buscas no existe.
                </p>
                <Link to="/" className="btn btn-secondary btn-lg btn-sm">
                    Volver a la Página de Inicio
                </Link>
            </div>
        </section>

    );
};

export default NotFound;
