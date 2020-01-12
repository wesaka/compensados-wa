import React, {Component} from "react";
import SectionTitleComponent from "../section-title/section-title.component";
import {ButtonContato, FormContato, InputBig, InputSmall} from "./contato-form.styles";
import {ContatoContainer} from "./contato-form.styles";
import { SuccessMessage, FailureMessage } from "../email-status-message/email-status-message.component";
import * as emailjs from "emailjs-com";
import SendingComponent from "../sending/sending.component";
import ReactGA from 'react-ga';
import {validateEmail} from "../../utils/verify.utils";

class ContatoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: true,
            showSuccessMessage: false,
            showFailureMessage: false,
            sentMessage: false,
        };

        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputSubject = React.createRef();
        this.inputSubject = React.createRef();
    }

    inputOnChange = (event) => {
        // Remove any border styles of the component when written on
        if (event.target.value) {
            event.target.style.removeProperty("border");
        }
    };

    sendEmail = ({name, email, subject, message}) => {
        // Verify if the fields are not empty, and if are, alert the user
        const redBorder = "2px solid red";
        if (!name) {
            this.inputName.style.border = redBorder;
            this.inputName.focus();
            return;
        }

        if (!validateEmail(email)) {
            this.inputEmail.style.border = redBorder;
            this.inputEmail.focus();
            return;
        }

        if (!message) {
            this.inputMessage.style.border = redBorder;
            this.inputMessage.focus();
            return;
        }

        this.setState({
            sentMessage: true
        });

        ReactGA.event({
            category: "E-Mail Enviado",
            action: "Usuário enviou um e-mail através da página contato."
        });

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
        ).then(this.onEmailSuccess, this.onEmailFailure)
    };

    onEmailSuccess = (response) => {
        this.setState({
            showForm: false,
            showSuccessMessage: true,
        });
    };

    onEmailFailure = (err) => {
        this.setState({
            showForm: false,
            showFailureMessage: true,
        });
        console.log("Error sending email: ", err);
    };

    message = () => {
        if (this.state.showSuccessMessage) return <SuccessMessage/>;
        if (this.state.showFailureMessage) return <FailureMessage/>;
        return null;
    };

    render() {
        const formContato = () => (
            <div>
                <FormContato>
                    <InputSmall onChange={this.inputOnChange} ref={c => this.inputName = c} type='text' name='fname' placeholder='Nome (Obrigatório)'/>
                    <InputSmall onChange={this.inputOnChange} ref={c => this.inputEmail = c} type='email' name='email' placeholder='E-mail (Obrigatório)'/>
                    <InputSmall onChange={this.inputOnChange} value={this.props.orcamento ? "Orçamento" : ""} ref={c => this.inputSubject = c} type='text' name='subject' placeholder='Assunto'/>
                    <InputBig onChange={this.inputOnChange} ref={c => this.inputMessage = c} type='text' name='message' placeholder='Mensagem'/>
                </FormContato>
                {this.state.sentMessage ?
                    <SendingComponent/> :
                    <ButtonContato onClick={() => this.sendEmail({
                        name: this.inputName.value,
                        email: this.inputEmail.value,
                        subject: this.inputSubject.value,
                        message: this.inputMessage.value
                    })}>ENVIAR MENSAGEM</ButtonContato>}
            </div>
        );

        return (
            <ContatoContainer>
                <SectionTitleComponent title='Entre em contato'/>
                {this.state.showForm ? formContato() : this.message()}
            </ContatoContainer>
        )
    }
}

export default ContatoForm;