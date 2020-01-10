import React from "react";
import {FooterItemContainer, FooterItemTitle, FooterParagraph} from "./footer-item.styles";

const FooterItem = ({title, paragraph, map}) => (
    <FooterItemContainer>
        <FooterItemTitle>{title}</FooterItemTitle>
        {paragraph ? <FooterParagraph>{paragraph}</FooterParagraph> : null}
        {map ? <iframe title='mapview'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.5143565631683!2d-50.595507899449956!3d-25.235957855936576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e86475e142fec3%3A0x264e4c5588fd99f!2sR.%20Prof.%20Souza%20Araujo%2C%201500%2C%20Imbituva%20-%20PR%2C%2084430-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1578626917613!5m2!1sen!2sus"
            width="400" height="150" frameBorder="0" style={{border:"0"}} allowFullScreen=""/> : null}
    </FooterItemContainer>
);

export default FooterItem;