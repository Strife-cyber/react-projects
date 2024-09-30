import React, { useState } from "react";
import Modal from "../modal/modal"; // Adjust the path according to your file structure

const AddCerButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="mb-4 text-center">
            <button className="btn btn-primary" style={{ backgroundColor: "orange", color: "white", border: "none" }} onClick={handleOpenModal}>
                Ajouter un CER
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default AddCerButton;
