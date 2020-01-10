import React, {Component} from "react";
import {
    FacebookButton,
    GreenHeader,
    NavigationHeader,
    TextoContato
} from "./header.styles";

import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import HeaderButtonsComponent from "../header-buttons/header-buttons.component";
import LogoComponent from "../logo/logo.component";

import {telefone, celular, email} from '../../assets/data';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerVisible: false,
            topLen: 0
        }
    }

    handleScroll = () => {
        this.setState({topLen: document.documentElement.scrollTop});
    };

    handleFacebookClick = () => {
        const fbwin = window.open('https://www.facebook.com/compensadoselaminadoswa/', '_blank');
        fbwin.focus()
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true});

        this.setState({
            headerVisible: true,
            topLen: document.documentElement.scrollTop
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div>
                <GreenHeader>
                    <TextoContato>Telefone: {telefone} | Whatsapp: {celular} |
                        {email}</TextoContato>
                    <FacebookButton onClick={this.handleFacebookClick} icon={faFacebookSquare}/>
                </GreenHeader>
                <NavigationHeader topLen={this.state.topLen}>
                    <LogoComponent/>
                    <HeaderButtonsComponent/>
                </NavigationHeader>
            </div>
        )
    }
    ;
}

export default HeaderComponent;