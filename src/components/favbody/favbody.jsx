import React from "react";
import LeftPart from "./checkboxgroup"; // Ensure the path is correct
import CerBankComponent from "../cers/cerbank"; // Ensure the path is correct
import './favbody.css';

const FavBodyComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Adjust the column sizes as needed for responsive layout */}
                <div className="col-md-4"> {/* LeftPart takes up 4 out of 12 columns */}
                    <LeftPart />
                </div>
                <div className="col-md-8"> {/* CerBankComponent takes up 8 out of 12 columns */}
                    <CerBankComponent />
                </div>
            </div>
        </div>
    );
}

export default FavBodyComponent;
