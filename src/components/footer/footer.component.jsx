import React from "react";
import {uid} from "react-uid";

import {FooterBottomContainer, FooterItemsContainer} from "./footer.styles";
import FooterItem from '../footer-item/footer-item.component'
import {footerContent} from "../../assets/footerContent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const FooterComponent = () => (
    <div>
        <FooterItemsContainer>
            {footerContent.map(item => <FooterItem key={uid(item)} {...item}/>)}
        </FooterItemsContainer>
        <FooterBottomContainer>
            <div><FontAwesomeIcon icon={faCopyright}/> Compensados e Laminados W.A. LTDA 2020</div>
            <div>Feito com <FontAwesomeIcon icon={faReact}/> por A. Wesley</div>
        </FooterBottomContainer>
    </div>
);

export default FooterComponent;