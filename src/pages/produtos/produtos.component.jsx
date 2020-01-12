import React, {Component} from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import ProdutoComponent from "../../components/produto/produto.component";
import {ProdutosPageContainer} from "./produtos.styles";
import OrcamentoComponent from "../../components/orcamento/orcamento.component";
import { uid } from "react-uid";

const data = require('../../assets/produtosData');

class ProdutosPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <ParallaxHeaderComponent title='Produtos' background='/images/produto.jpg'/>
                <ProdutosPageContainer>
                    {data.map(item => (<ProdutoComponent key={uid(item)} {...item}/>))}
                </ProdutosPageContainer>
                <OrcamentoComponent/>
            </div>
        )
    }
};

export default ProdutosPage;
