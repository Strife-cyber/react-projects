import React from "react";
import Filter from "./filter";
import AddCerButton from "./addcer";
import CerTable from "./certable";
import './gerer.css'; // Create this CSS file for any custom styles

const GererComponent = () => {
    return (
        <main className="container-fluid">
            <h1 className="text-center mb-4">Gérer mes CERs</h1>
            <Filter />
            <div className="place">
                <AddCerButton />
            </div>
            <CerTable />
        </main>
    );
};

export default GererComponent;