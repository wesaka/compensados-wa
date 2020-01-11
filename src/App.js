import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import HeaderComponent from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ProdutosPage from "./pages/produtos/produtos.component";
import EmpresaPage from "./pages/empresa/empresa.component";
import ContatoPage from "./pages/contato/contato.component";
import FooterComponent from "./components/footer/footer.component";

// TODO add google analytics

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/produtos' component={ProdutosPage}/>
            <Route exact path='/empresa' component={EmpresaPage}/>
            <Route exact path='/contato' component={ContatoPage}/>
        </Switch>
        <FooterComponent/>
    </div>
  );
}

export default App;
