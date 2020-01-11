import React from "react";
import ContatoForm from "../../components/contato-form/contato-form.component";
import EnderecoComponent from "../../components/endereco/endereco.component";
import {ContatoContainer} from "./contato.styles";

const ContatoPage = () => (
    <ContatoContainer>
        <ContatoForm/>
        <EnderecoComponent/>
    </ContatoContainer>
);

export default ContatoPage;