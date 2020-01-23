import {rua, numero, bairro, cep, cidade, estado, telefone, email, nomeVendedor, celularVendedor, emailVendedor} from './data'

export const footerContent = [
    {
        title: 'SOBRE',
        map: false,
        paragraph: 'A Empresa Compensados e Laminados W.A. Ltda., atua no mercado madeireiro desde o ano de 2005, visando apresentar produtos com qualidade diversificada, tendo como principal objetivo oferecer materiais de baixo custo, com maior durabilidade e sustentabilidade.',
    },
    {
        title: 'CONTATO',
        map: false,
        paragraph: `${rua}, ${numero}\n${bairro}, ${cep}\n${cidade} - ${estado}\nTelefone: ${telefone}\nE-mail: ${email}\n\nFale direto com nosso vendedor:\n${nomeVendedor} - ${celularVendedor}\n${emailVendedor}`,
    },
    {
        title: 'MAPA',
        map: true,
        paragraph: ""
    }
];