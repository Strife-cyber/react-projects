import React, { useState } from 'react';
import './styles.css'; // Your custom styles

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comments, setComments] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        if (!email) {
            setErrorMessage("Le champ email est requis.");
            return false;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            setErrorMessage("Veuillez entrer une adresse email valide.");
            return false;
        }

        if (!password) {
            setErrorMessage("Le champ mot de passe est requis.");
            return false;
        }

        setErrorMessage("");
        alert("Formulaire soumis avec succès !");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform form submission actions here if needed
            console.log({ email, password, comments });
        }
    };

    return (
        <div className="container">
            <div className="white-box">
                <h1>Contactez nous!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <input 
                            type="email" 
                            placeholder="Entrez votre email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="">
                        <input 
                            type="password" 
                            placeholder="Entrez votre mot de passe" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <h2>Commentaire</h2>
                    <div className="">
                        <input 
                            type="text" 
                            placeholder="Commentaire" 
                            id="comments" 
                            value={comments} 
                            onChange={(e) => setComments(e.target.value)} 
                        />
                    </div>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <input type="submit" value="Envoyer" className="btn btn-warning" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
