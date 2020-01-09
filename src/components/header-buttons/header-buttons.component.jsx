import React from "react";
import {NavigationAccent, NavigationButton, HeaderButtonsContainer} from "../header-buttons/header-buttons.styles";

const HeaderButtonsComponent = () => (
    <HeaderButtonsContainer>
        <NavigationButton>
            <NavigationAccent/>
            Home
        </NavigationButton>
        <NavigationButton>
            <NavigationAccent/>
            Produtos
        </NavigationButton>
        <NavigationButton>
            <NavigationAccent/>
            Empresa
        </NavigationButton>
        <NavigationButton>
            <NavigationAccent/>
            Contato
        </NavigationButton>
    </HeaderButtonsContainer>
);

export default HeaderButtonsComponent;