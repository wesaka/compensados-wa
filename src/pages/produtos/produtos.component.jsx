import React, { Component } from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import ProdutoComponent from "../../components/produto/produto.component";
import {ProdutosPageContainer} from "./produtos.styles";
import OrcamentoComponent from "../../components/orcamento/orcamento.component";
import { uid } from "react-uid";
import { Spacer } from "../home/home.styles";

const data = require('../../assets/produtosData');

class ProdutosPage extends Component{
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <ParallaxHeaderComponent title='Produtos' background='/images/011.jpg'/>
                <ProdutosPageContainer>
                    {data.map((item, key) => (<ProdutoComponent index={key} key={uid(item)} {...item}/>))}
                </ProdutosPageContainer>
                <OrcamentoComponent/>
                <Spacer/>
            </div>
        )
    }
};

export default ProdutosPage;
