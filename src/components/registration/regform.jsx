import React from 'react';
import './regform.css';
import passwordamico from '../../assets/My password-amico 1.jpg';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const gotohome = () => {
        navigate('/')
    }

    const gotoconnexion = () => {
        navigate('/connexion')
    }

    return (
        <div className='container-fluid' id="body-gradient">
            <div className="white-box container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 left-box">
                        <h1>Créer un compte</h1>
                        <div className="entry-box">
                            <h5>Nom complet</h5>
                            <input type="text" id='nom-complet' placeholder="Nom complet" />
                        </div>
                        <div className="entry-box">
                            <h5>Email</h5>
                            <input type="text" id='mail' placeholder="Entrer votre email" />
                        </div>
                        <div className="combo-box">
                            <h5>Niveaux</h5>
                            <select title="Niveaux">
                                <option value="X1">X1</option>
                                <option value="X2">X2</option>
                                <option value="X3">X3</option>
                                <option value="X4">X4</option>
                                <option value="X5">X5</option>
                            </select>
                        </div>
                        <div className="password-box">
                            <h5>Mot de passe</h5>
                            <div className="password-container">
                                <input type="password" id='passe' placeholder="Entrer votre mot de passe" />
                                <span>
                                    <i></i> {/* Eye icon */}
                                </span>
                            </div>
                        </div>
                        <input type="submit" id='submit-cre' value="Créer un compte" onClick={gotohome} />
                        <p className='text-center'>Vous avez déjà un compte? <a href="#Home" onClick={gotoconnexion}>Connectez-vous</a></p>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block right-box">
                        <img src={passwordamico} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
