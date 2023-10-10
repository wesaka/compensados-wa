import { LinkPhone } from "../components/header/header.styles";
import React from "react";

export const linkPhone = (telefone) => (
    <LinkPhone href={'javascript:void(0);'}>{telefone}</LinkPhone>

    // Overwrote the old way to ignore the phone number and just go directly to whatsapp page
    // <LinkPhone href={`tel:${telefone}`}>{telefone}</LinkPhone>
);