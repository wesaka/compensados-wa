import React from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import PicturesComponent from "../../components/pictures/pictures.component";
import HistoriaComponent from "../../components/historia/historia.component";

const EmpresaPage = () => (
    <div>
        <ParallaxHeaderComponent title='Conheça a W.A.' background='/images/empresa.jpg'/>
        <HistoriaComponent/>
        <PicturesComponent/>
    </div>
);

export default EmpresaPage;