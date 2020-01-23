import React, { Component } from "react";

import ContatoForm from "../../components/contato-form/contato-form.component";
import EnderecoComponent from "../../components/endereco/endereco.component";
import {ContatoContainer, MapFrame} from "./contato.styles"

class ContatoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orcamento: false
        };

        this.contatoForm = React.createRef();
    }

    componentDidMount() {
        this.setState({
            orcamento: this.props.location.pathname === '/contato/orcamento'
        });

        // Added the 200 in the offset because I'm referencing the inputName and need to account for the title
        // (I couldn't set a proper reference to the title)
        window.scrollTo({
            top: this.props.location.pathname === '/contato/orcamento' ? (this.contatoForm.inputName.offsetTop - 200) : 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <MapFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0286707323553!2d-50.59704588498969!3d-25.235959283878113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec2aaa053ef279f!2sCompensados%20e%20Laminados%20W.A.%20Ltda.!5e0!3m2!1sen!2sbr!4v1579800656456!5m2!1sen!2sbr"
                    frameBorder="0" allowFullScreen=""/>
                <ContatoContainer>
                    <ContatoForm orcamento={this.state.orcamento} ref={c => this.contatoForm = c}/>
                    <EnderecoComponent/>
                </ContatoContainer>
            </div>
        )
    }
};

export default ContatoPage;