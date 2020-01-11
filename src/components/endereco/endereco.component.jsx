import React from "react";

import {rua, numero, bairro, cidade, estado, cep, telefone, email} from '../../assets/data';
import {EnderecoContainer, EnderecoData} from "./endereco.styles";

const EnderecoComponent = () => (
    <EnderecoContainer>
        <h2>Endereço</h2>
        <EnderecoData>{rua}, {numero}<br/>{bairro} - {cidade}, {estado}<br/>{cep}<br/><br/>Telefone: {telefone}<br/>E-mail: {email}</EnderecoData>
    </EnderecoContainer>
);

export default EnderecoComponent;