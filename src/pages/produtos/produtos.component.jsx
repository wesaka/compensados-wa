import React from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import ProdutoComponent from "../../components/produto/produto.component";
import {ProdutosPageContainer} from "./produtos.styles";
import OrcamentoComponent from "../../components/orcamento/orcamento.component";
import { uid } from "react-uid";

const data = require('../../assets/produtosData');

const ProdutosPage = () => (
    <div>
        <ParallaxHeaderComponent title='Produtos' background='/images/produto.jpg'/>
        <ProdutosPageContainer>
            {data.map(item => (<ProdutoComponent key={uid(item)} {...item}/>))}
        </ProdutosPageContainer>
        <OrcamentoComponent/>
    </div>
);

export default ProdutosPage;
