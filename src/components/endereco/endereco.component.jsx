import React from "react";

import {rua, numero, bairro, cidade, estado, cep, telefone, email} from '../../assets/data';
import {EnderecoContainer} from "./endereco.styles";

const EnderecoComponent = () => (
    <EnderecoContainer>
        <h2>Endereço</h2>
        <p>{rua}, {numero}<br/>{bairro} - {cidade}, {estado}<br/>{cep}<br/><br/>Telefone: {telefone}<br/>E-mail: {email}</p>
    </EnderecoContainer>
);

export default EnderecoComponent;