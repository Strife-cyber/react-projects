import React from "react";
import HeaderComponent from "../components/header/header";
import HeroComponent from "../components/hero/hero";
import CerBankComponent from "../components/cers/cerbank";
import FooterComponent from "../components/footer/footer";

const HomePage = () => {
    return (
        <>
        <HeaderComponent/>
        <HeroComponent/>
        <CerBankComponent/>
        <FooterComponent/>
        </>
    );
}

export default HomePage;