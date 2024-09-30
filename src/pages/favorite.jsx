import React from "react";
import HeaderComponent from "../components/header/header";
import FavorisComponent from "../components/favoris/favoris";
import FavBodyComponent from "../components/favbody/favbody";
import FooterComponent from "../components/footer/footer";

const FavoritePage = () => {
    return (
        <>
        <HeaderComponent/>
        <FavorisComponent/>
        <FavBodyComponent/>
        <FooterComponent/>
        </>
    );
}

export default FavoritePage;