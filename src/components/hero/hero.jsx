import React from "react";
import heroImage from '../../assets/Abstract Line.png'; // Import the image properly
import './hero.css'

const HeroComponent = () => {
    return (
        <div className="container-fluid hero py-5 text-center" id="body">
            {/* Search Input */}
            <div className="row mb-4">
                <div className="col-12">
                    <input 
                        type="search" 
                        placeholder="Rechercher un CER" 
                        className="form-control form-control-lg mx-auto w-50"
                        id="recherche"
                    />
                </div>
            </div>

            {/* Head Container */}
            <div className="head-container d-flex justify-content-center">
                <img src={heroImage} alt="Abstract Line" className="hero-image"/>
                <h1 className="hero-title">Bienvenue sur Archiva, votre espace</h1>
            </div>

            {/* Subheading */}
            <div className="row mb-3">
                <div className="col-12">
                    <h2 id="sub-heading">Espace d'archivage d'anciens CERs</h2>
                </div>
            </div>

            {/* Subheading 2 */}
            <div className="row mb-5">
                <div className="col-12">
                    <h3 id="slogan">L'homme n'est rien sans son bord</h3>
                </div>
            </div>

            {/* Buttons */}
            <div className="row mb-5">
                <div className="col-12">
                    <button className="btn btn-primary me-3 px-4 py-2" id="explorer">Explorer plus de CER</button>
                    <button className="btn btn-outline-secondary px-4 py-2" id="tous">Tous les CERs</button>
                </div>
            </div>

            {/* Body Section */}
            <div className="body mb-5">
                <h2 className="mb-4">Les meilleurs CERs du moment</h2>
                <div className="row mb-3">
                    <div className="col-md-8 mx-auto">
                        <p>
                            Découvrez ci-dessous les CERs les plus appréciés par notre communauté d'utilisateurs.
                            Ces CERs ont été sélectionnés et évalués par nos membres en fonction de leur qualité,
                            pertinence et utilité.
                        </p>
                    </div>
                </div>

                {/* Voir Plus Button */}
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-secondary px-4 py-2" id="plus">Voir Plus</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
