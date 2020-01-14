import React from "react";

import { NavigationDropdown} from "./compact-navigator.styles";
import { Dropdown } from "semantic-ui-react";


const CompactNavigator = ({ history }) => (
    <NavigationDropdown icon='bars'>
        <Dropdown.Menu>
            <Dropdown.Item onClick={() => history.push('/')}>
                Home
            </Dropdown.Item>
            <Dropdown.Item onClick={() => history.push('/produtos')}>
                Produtos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => history.push('/empresa')}>
                Empresa
            </Dropdown.Item>
            <Dropdown.Item onClick={() => history.push('/contato')}>
                Contato
            </Dropdown.Item>
        </Dropdown.Menu>
    </NavigationDropdown>
);

export default CompactNavigator;