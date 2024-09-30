import React from "react";
import './checkbox.css';

const CheckBoxGroup = ({ title, options }) => {
    return (
        <div>
            <h3>{title}</h3>
            {options.map((option, index) => (
                <div className="check-box" key={index}>
                    <input type="checkbox" id={option} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
};

const LeftPart = () => {
    const niveaux = ["X5", "X4", "X3", "X2", "X1"];
    const specialites = ["Reseau & Infra", "Genie-logiciel", "Gestion de projet", "Data", "Securite"];

    return (
        <div className="container left-part">
            <CheckBoxGroup title="Niveaux" options={niveaux} />
            <CheckBoxGroup title="Domaines de specialites" options={specialites} />
        </div>
    );
};

export default LeftPart;
