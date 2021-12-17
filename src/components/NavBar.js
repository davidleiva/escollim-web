import { Link } from "gatsby";
import React from "react";

export default function NavBar() {
  return (
    <nav class="navbar">
        <div class="container flex-nowrap">
            <a class="navbar-brand" href="/">
            Escollim LF
            </a>
            <div className="d-flex w-100 justify-content-between">
                <div className="d-flex">
                    <Link to="/" className="nav-link" activeClassName="active">Inicio</Link>
                    <Link to="/noticias" className="nav-link" activeClassName="active">Noticias</Link>
                    <Link to="/acciones" className="nav-link" activeClassName="active">Acciones</Link>
                    <Link to="/que-es-escollim" className="nav-link" activeClassName="active">¿Qué es Escollim?</Link>
                    <Link to="/opinion" className="nav-link" activeClassName="active">Opinión</Link>
                    <Link to="/contacto" className="nav-link" activeClassName="active">Contacto</Link>
                </div>
                <button>Únete a Escollim</button>
            </div>
        </div>
    </nav>
  );
}
