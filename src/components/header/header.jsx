import React from "react";
import logo from '../../assets/logo.png';
import './header.css'

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-md" id="header">
            <div className="container-fluid" id="nav-items">
                <a className="navbar-brand" href="#Home">
                    <img src={logo} alt="Logo Here"></img>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home" /*Add link here*/>Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">CERs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Mes CER Favoris</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Gestion de CER</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary" id="connexion">Connexion</button>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;