import React from "react";

const CerTable = () => {
    const cerData = [
        {
            title: "Prosit 3.2 - Annuaire Active Directory",
            specialty: "Resaux et Infra; Sécurité",
            level: "X3",
            date: "11/07/2024"
        },
        {
            title: "Prosit 1.2 - Les réseaux LAN",
            specialty: "Resaux et Infra; Sécurité",
            level: "X1",
            date: "13/02/2024"
        },
        {
            title: "Prosit 4.2 - Charte d'un projet",
            specialty: "Gestion de projet",
            level: "X4",
            date: "01/07/2024"
        },
        {
            title: "Prosit 4.2 - Base de données analytique",
            specialty: "Data",
            level: "X3",
            date: "11/07/2024"
        },
        {
            title: "Prosit 1.2 - IHM intuitives",
            specialty: "Génie-logiciel",
            level: "X1",
            date: "11/07/2024"
        },
        {
            title: "SAM Gestion des ressources humaines",
            specialty: "Gestion de projet",
            level: "X5",
            date: "11/09/2024"
        },
        {
            title: "Prosit 4.3 - Investigation numérique",
            specialty: "Sécurité",
            level: "X3",
            date: "11/07/2024"
        }
    ];

    return (
        <table className="table table-responsive">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Spécialité</th>
                    <th>Niveaux</th>
                    <th>Date <span>↑</span></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cerData.map((cer, index) => (
                    <tr key={index}>
                        <td>{cer.title}</td>
                        <td>{cer.specialty}</td>
                        <td>{cer.level}</td>
                        <td>{cer.date}</td>
                        <td>
                            <button className="btn btn-warning mx-1">Éditer</button>
                            <button className="btn btn-danger mx-1">Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CerTable;