import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import {
    FacebookButton,
    GreenHeader, HeaderContainer, HeaderFilling,
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
        this.setState({
                topLen: window.scrollY > 36 ? 36 : window.scrollY
            }
        );
    };

    handleFacebookClick = () => {
        const fbwin = window.open('https://www.facebook.com/compensadoselaminadoswa/', '_blank');
        fbwin.focus()
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true});

        this.setState({
            headerVisible: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div>
                <HeaderContainer topLen={this.state.topLen}>
                <GreenHeader>
                    <TextoContato>Telefone: {telefone} | Whatsapp: {celular} | {email}</TextoContato>
                    <FacebookButton onClick={this.handleFacebookClick} icon={faFacebookSquare}/>
                </GreenHeader>
                <NavigationHeader id='navigationheader'>
                    <LogoComponent history={this.props.history}/>
                    <HeaderButtonsComponent/>
                </NavigationHeader>
                </HeaderContainer>
                <HeaderFilling/>
            </div>

        )
    }
    ;
}

export default withRouter(HeaderComponent);