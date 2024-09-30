import React, { useState } from "react";
import './cerbank.css'; // Ensure proper styling here
import project1Img from '../../assets/project-1.jpg';
import project2Img from '../../assets/projet-2.jpg';
import project3Img from '../../assets/projet-3.jpg';
import project4Img from '../../assets/projet-4.jpg';
import project5Img from '../../assets/projet-5.jpg';
import project6Img from '../../assets/projet-6.jpg';
import likeIcon from '../../assets/like.png'; // Importing like icon

const CerBankComponent = () => {
    const [showMore, setShowMore] = useState(false);

    const handleLoadMore = () => {
        setShowMore(true);
    };

    return (
        <div className="container-fluid" id="body">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img id="image" src={project1Img} className="card-img-top" alt="Project 1" />
                        <div className="card-body" id="card-body">
                            <div id="row">
                                <img src={likeIcon} alt="like" className="me-2" />
                                <h5 className="card-title mb-0">par Sadjo Mamadou</h5>
                            </div>
                            <h4 className="card-title">Prosit 3.2 Annuaire Active Directory</h4>
                            <p className="card-text">
                                L'Annuaire Active Directory (AD) est un service de gestion des identités et des accès utilisé principalement dans les environnements Windows...
                            </p>
                            <div className="container-fluid" id="center">
                                <button className="btn btn-primary" id="consult">Consulter le CER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img id="image" src={project2Img} className="card-img-top" alt="Project 2" />
                        <div className="card-body" id="card-body">
                            <div id="row">
                                <img src={likeIcon} alt="like" className="me-2" />
                                <h5 className="card-title mb-0">par Pauline Lock</h5>
                            </div>
                            <h4 className="card-title">Prosit 2.2 Modélisation UML</h4>
                            <p className="card-text">
                                Le Langage de Modélisation Unifié est un langage de modélisation graphique conçu comme un standard pour décrire les systèmes logiciels...
                            </p>
                            <div className="container-fluid" id="center">
                                <button className="btn btn-primary" id="consult">Consulter le CER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img id="image" src={project3Img} className="card-img-top" alt="Project 3" />
                        <div className="card-body" id="card-body">
                            <div id="row">
                                <img src={likeIcon} alt="like" className="me-2" />
                                <h5 className="card-title mb-0">par Providence Djekoun</h5>
                            </div>
                            <h4 className="card-title">Prosit 4.1 Développement avancé</h4>
                            <p className="card-text">
                                Advance Web Development fait référence au processus de création de sites Web dynamiques et interactifs qui vont au-delà des pages Web statiques...
                            </p>
                            <div className="container-fluid" id="center">
                                <button className="btn btn-primary" id="consult">Consulter le CER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hidden Cards */}
                {showMore && (
                    <>
                        {/* Card 4 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img id="image" src={project4Img} className="card-img-top" alt="Project 4" />
                                <div className="card-body" id="card-body">
                                    <div id="row">
                                        <img src={likeIcon} alt="like" className="me-2" />
                                        <h5 className="card-title mb-0">par Daryl Noupik</h5>
                                    </div>
                                    <h4 className="card-title">Prosit 3.3 API et Webservice</h4>
                                    <p className="card-text">
                                        Les API sont principalement axées sur la communication entre applications pour l'accès aux fonctionnalités...
                                    </p>
                                    <div className="container-fluid" id="center">
                                        <button className="btn btn-primary" id="consult">Consulter le CER</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img id="image" src={project5Img} className="card-img-top" alt="Project 5" />
                                <div className="card-body" id="card-body">
                                    <div id="row">
                                        <img src={likeIcon} alt="like" className="me-2" />
                                        <h5 className="card-title mb-0">par Providence Djekoun</h5>
                                    </div>
                                    <h4 className="card-title">Prosit 4.5 Architecture microservices</h4>
                                    <p className="card-text">
                                        Une architecture de microservices est un type d'architecture d'application dans laquelle l'application est développée sous forme d'un ensemble de services...
                                    </p>
                                    <div className="container-fluid" id="center">
                                        <button className="btn btn-primary" id="consult">Consulter le CER</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img id="image" src={project6Img} className="card-img-top" alt="Project 6" />
                                <div className="card-body" id="card-body">
                                    <div id="row">
                                        <img src={likeIcon} alt="like" className="me-2" />
                                        <h5 className="card-title mb-0">par Sadjo Mamadou</h5>
                                    </div>
                                    <h4 className="card-title">Prosit 4.5 Architecture distribuée</h4>
                                    <p className="card-text">
                                        L'architecture distribuée désigne un système d'information ou un réseau pour lequel l'ensemble des ressources disponibles ne se trouvent...
                                    </p>
                                    <div className="container-fluid" id="center">
                                        <button className="btn btn-primary" id="consult">Consulter le CER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Load More Button */}
            {!showMore && (
                <div className="text-center mt-4">
                    <button onClick={handleLoadMore} className="btn btn-secondary">
                        Voir Plus
                    </button>
                </div>
            )}
        </div>
    );
};

export default CerBankComponent;
