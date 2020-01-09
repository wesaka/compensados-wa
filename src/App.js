import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderComponent from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ProdutosPage from "./pages/produtos/produtos.component";
import EmpresaPage from "./pages/empresa/empresa.component";
import ContatoPage from "./pages/contato/contato.component";

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
    </div>
  );
}

export default App;
