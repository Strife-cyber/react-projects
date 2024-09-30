import React from "react";
import './favoris.css'; // Make sure to create a CSS file for custom styling

// Import the images in React instead of using 'src' directly
import TablistTab from '../../assets/Tablist → Tab.png';
import TablistTab2 from '../../assets/Tablist → Tab 2.png';

const FavorisComponent = () => {
    return (
        <>
            <div className="container-fluid" id="body">
                <h1>Mes CER Favoris</h1>

                <div id="row">
                    <p>25 CERs Au Total</p>

                    <input 
                        type="search" 
                        placeholder="Rechercher un CER" 
                        id="recherche"
                    />

                    <div className="" id="row">
                        <p>Sort By:</p>
                        <select className="form-control">
                            <option value="Titre">Titre</option>
                        </select>
                        <img src={TablistTab} alt="Tablist 1" className="img-fluid mx-2" />
                        <img src={TablistTab2} alt="Tablist 2" className="img-fluid mx-2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavorisComponent;
