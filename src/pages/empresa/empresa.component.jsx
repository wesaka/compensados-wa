import React from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import {ProdutosPageContainer} from "../produtos/produtos.styles";
import ProdutoComponent from "../../components/produto/produto.component";
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