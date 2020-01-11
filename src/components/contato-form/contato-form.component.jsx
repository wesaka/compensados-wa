import React from "react";
import SectionTitleComponent from "../section-title/section-title.component";
import {ButtonContato, FormContato, InputBig, InputSmall} from "./contato-form.styles";
import {ContatoContainer} from "./contato-form.styles";

const ContatoForm = () => (
    <ContatoContainer>
        <SectionTitleComponent title='Entre em contato'/>
        <FormContato>
            <InputSmall type='text' name='fname' placeholder='Nome (Obrigatório)'/>
            <InputSmall type='email' name='email' placeholder='E-mail (Obrigatório)'/>
            <InputSmall type='text' name='subject' placeholder='Assunto'/>
            <InputBig type='text' name='message' placeholder='Mensagem'/>
        </FormContato>
        <ButtonContato>ENVIAR MENSAGEM</ButtonContato>
    </ContatoContainer>
);

export default ContatoForm;