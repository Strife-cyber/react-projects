import React from 'react';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import locationIcon from '../../assets/location.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linked-in.png';
import logo from '../../assets/logo.png';
import './footer.css';

const FooterComponent = () => {
    return (
        <footer className="container-fluid pt-4" id="footer">
            <div className="row text-center text-md-start">
                {/* Left Container */}
                <div className="col-9 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start" id='left'>
                    <img src={logo} alt="Logo" className="footer-logo mb-3" />
                    <div className="d-flex align-items-center mb-2">
                        <img src={emailIcon} alt="Email" className="footer-icon me-2" />
                        <p className="mb-0">info@archiva.com</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <img src={phoneIcon} alt="Phone" className="footer-icon me-2" />
                        <p className="mb-0">+237 600 000 000</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <img src={locationIcon} alt="Location" className="footer-icon me-2" />
                        <p className="mb-0">Yassa, Douala/Cameroun</p>
                    </div>
                </div>

                {/* Center Container */}
                <div className="col-11 col-md-4 mb-4 mb-md-0 text-center" id='center'>
                    <h5>Accueil</h5>
                    <ul className="list-unstyled">
                        <li><a href="#CERS" id='a'>CERs</a></li>
                        <li><a href="#favorites" id='a'>Mes CERs favoris</a></li>
                        <li><a href="#manage" id='a'>Gestion de CER</a></li>
                    </ul>
                </div>

                {/* Right Container */}
                <div className="col-11 col-md-4 text-center" id='right'>
                    <h5>Social Profiles</h5>
                    <div className="d-flex justify-content-center">
                        <a href="#facebook" className="me-2">
                            <img src={facebookIcon} alt="Facebook" className="social-icon" />
                        </a>
                        <a href="#twitter" className="me-2">
                            <img src={twitterIcon} alt="Twitter" className="social-icon" />
                        </a>
                        <a href="#linkedin">
                            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="row mt-4">
                <div className="col text-center">
                    <p className="rights mb-0">© 2024 Archiva. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
