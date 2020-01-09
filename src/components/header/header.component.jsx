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
        console.log(document.documentElement.scrollTop);
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
                    <TextoContato>Telefone: (42) 3436-1412 | Whatsapp: (42) 99127-4005 |
                        azaltda@uol.com.br</TextoContato>
                    <FacebookButton icon={faFacebookSquare}/>
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