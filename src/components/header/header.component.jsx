import React, {Component} from "react";
import { withRouter } from 'react-router-dom';

import {
    FacebookButton,
    GreenHeader, HeaderContainer, HeaderFilling,
    NavigationHeader,
    TextoContato
} from "./header.styles";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import HeaderButtonsComponent from "../header-buttons/header-buttons.component";
import LogoComponent from "../logo/logo.component";

import {telefone, email} from '../../assets/data';
import { linkPhone } from "../../utils/phone.utils";
import CompactNavigator from "../compact-navigator/compact-navigator.component";
import WhatsappContactComponent from "../whatsapp-button/whatsapp-contact.component";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerVisible: false,
            topLen: 0,
            hideNav: (window.innerWidth <= 760)
        }
    }

    handleFacebookClick = () => {
        const fbwin = window.open('https://www.facebook.com/compensadoselaminadoswa/', '_blank');
        fbwin.focus()
    };

    handleScroll = () => {
        this.setState({
                topLen: window.scrollY > 36 ? 36 : window.scrollY
            }
        );
    };

   handleResize = () => {

       this.setState({
            hideNav: (window.innerWidth <= 760)
       });
   };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true});
        window.addEventListener('resize', this.handleResize);

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
                    <TextoContato>{'Telefone: '}{linkPhone(telefone)}{' | Vendas '}<WhatsappContactComponent />{this.state.hideNav ? '' : ` | ${email}`}</TextoContato>
                    <FacebookButton onClick={this.handleFacebookClick} icon={faFacebook}/>
                </GreenHeader>
                <NavigationHeader id='navigationheader'>
                    <LogoComponent history={this.props.history}/>
                    {this.state.hideNav ?
                        <CompactNavigator history={this.props.history}/>
                        :
                        <HeaderButtonsComponent/>
                    }
                </NavigationHeader>

                </HeaderContainer>
                <HeaderFilling/>
            </div>

        )
    }
    ;
}

export default withRouter(HeaderComponent);