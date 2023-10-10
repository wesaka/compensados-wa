import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {WhatsappButton} from "./whatsapp-contact.styles";
import {linkPhone} from "../../utils/phone.utils";
import {celularVendedor} from '../../assets/data';

const WhatsappContactComponent = () => {
    const number = '+5542991274008';
    const message = 'Olá! Tenho interesse em mais informações. Poderia me ajudar?\n';

    return (
        <span onClick={() => window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank')}>
            <WhatsappButton icon={faWhatsapp} />
            {linkPhone(celularVendedor)}
        </span>
    );
};

export default WhatsappContactComponent;
