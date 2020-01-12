import React, {Component} from "react";

import ContatoForm from "../../components/contato-form/contato-form.component";
import EnderecoComponent from "../../components/endereco/endereco.component";
import {ContatoContainer, MapFrame} from "./contato.styles"

class ContatoPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <MapFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0288147958895!2d-50.59704588497468!3d-25.235954431436507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e86475e142fec3%3A0x264e4c5588fd99f!2sR.%20Prof.%20Souza%20Araujo%2C%201500%2C%20Imbituva%20-%20PR%2C%2084430-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1578706316776!5m2!1sen!2sus"
                    frameBorder="0" allowFullScreen=""/>
                <ContatoContainer>
                    <ContatoForm/>
                    <EnderecoComponent/>
                </ContatoContainer>
            </div>
        )
    }
};

export default ContatoPage;