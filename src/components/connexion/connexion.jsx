import React from 'react';
import './styles.css'; // Your custom styles
import passwordamico from '../../assets/My password-amico 2.jpg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const gotohome = () => {
        navigate('/');
    }

    const gotoregister = () => {
        navigate('/register');
    }

    return (
        <div className="container white-box my-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <h1>Se connecter</h1>
                    <div className="input-container mb-3">
                        <h5>Email</h5>
                        <input id='entry' type="text" placeholder="Entrer votre email" />
                    </div>
                    <div className="input-container mb-3">
                        <h5>Mot de passe</h5>
                        <input id='entry' type="password" placeholder="Entrer votre mot de passe" />
                    </div>
                    <h6 className="mot">Mot de passe oublié ?</h6>
                    <input onClick={gotohome} type="submit" className="btn btn-warning w-100" value="Se connecter" />
                    <h6>
                        Vous n'avez pas de compte ? <a href='#Home' onClick={gotoregister}>Créer un nouveau compte</a>
                    </h6>
                </div>
                <div className="col-lg-6 d-none d-lg-flex justify-content-center">
                    <img src={passwordamico} alt="Illustration" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
