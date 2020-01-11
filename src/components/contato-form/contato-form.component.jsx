import React, {Component} from "react";
import SectionTitleComponent from "../section-title/section-title.component";
import {ButtonContato, FormContato, InputBig, InputSmall} from "./contato-form.styles";
import {ContatoContainer} from "./contato-form.styles";
import * as emailjs from "emailjs-com";

const sendEmail = ({name, email, subject, message}) => {
    const templateParams = {
        from_name: name,
        email: email,
        subject: subject,
        message_html: message
    };

    emailjs.send(
        'gmail',
        'template_FeYGUoYg',
        templateParams,
        process.env.REACT_APP_EMAIL_KEY
    )
};

class ContatoForm extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputSubject = React.createRef();
        this.inputSubject = React.createRef();
    }

    render() {
        return (
            <ContatoContainer>
                <SectionTitleComponent title='Entre em contato'/>
                <FormContato>
                    <InputSmall ref={c => this.inputName = c} type='text' name='fname' placeholder='Nome (Obrigatório)'/>
                    <InputSmall ref={c => this.inputEmail = c} type='email' name='email' placeholder='E-mail (Obrigatório)'/>
                    <InputSmall ref={c => this.inputSubject = c} type='text' name='subject' placeholder='Assunto'/>
                    <InputBig ref={c => this.inputMessage = c} type='text' name='message' placeholder='Mensagem'/>
                </FormContato>
                <ButtonContato onClick={() => sendEmail({
                    name: this.inputName.value,
                    email: this.inputEmail.value,
                    subject: this.inputSubject.value,
                    message: this.inputMessage.value
                })}>ENVIAR MENSAGEM</ButtonContato>
            </ContatoContainer>
        )
    }
}

export default ContatoForm;