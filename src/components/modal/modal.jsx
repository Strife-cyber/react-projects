import React from "react";
import './modal.css'; // Ensure this file includes your CSS

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div id="modal-overlay" className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Ajouter un nouveau CER</h2>
                    <span className="close-modal" onClick={onClose}>&times;</span>
                </div>
                <form>
                    <label htmlFor="titre-cer">Titre du CER</label>
                    <input type="text" id="titre-cer" placeholder="Exemple: Prosit 4.3 - Recherche Opérationnelle" />

                    <label htmlFor="niveau">Niveaux</label>
                    <select id="niveau">
                        <option value="X1">X1</option>
                        <option value="X2">X2</option>
                        <option value="X3">X3</option>
                        <option value="X4">X4</option>
                        <option value="X5">X5</option>
                    </select>

                    <label>Domaines de spécialité</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" value="Gestion de projet" /> Gestion de projet</label>
                        <label><input type="checkbox" value="Génie-logiciel" /> Génie-logiciel</label>
                        <label><input type="checkbox" value="Reseaux & Infra" /> Réseaux & Infra</label>
                        <label><input type="checkbox" value="Sécurité" /> Sécurité</label>
                        <label><input type="checkbox" value="Data" /> Data</label>
                    </div>

                    <label htmlFor="description">Description du CER</label>
                    <textarea id="description" placeholder="Entrez ici la description ou un résumé de votre CER"></textarea>

                    <label>Fichiers du CER</label>
                    <div className="file-upload">
                        <img src="assets/File plus.png" alt="" />
                        <label htmlFor="fichier-cer">Cliquez ici pour attacher le fichier du CER (.pdf ou .docx)</label>
                    </div>

                    <button type="submit" className="save-button">Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
