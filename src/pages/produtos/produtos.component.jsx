import React from "react";
import {TestDiv} from "../../components/parallax-header/parallax-header.styles";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import ProdutoComponent from "../../components/produto/produto.component";
import {ProdutosPageContainer} from "./produtos.styles";

const data = require('../../assets/produtosData');

const ProdutosPage = () => (
    <div>
        <ParallaxHeaderComponent/>
        <ProdutosPageContainer>
            {data.map(item => (<ProdutoComponent {...item}/>))}

        </ProdutosPageContainer>
    </div>
);

export default ProdutosPage;
