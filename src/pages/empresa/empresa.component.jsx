import React, {Component} from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import PicturesComponent from "../../components/pictures/pictures.component";
import HistoriaComponent from "../../components/historia/historia.component";
import {logPageView} from "../../utils/analytics.utils";

class EmpresaPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);

        logPageView();
    }

    render() {
        return (
            <div>
                <ParallaxHeaderComponent title='Conheça a W.A.' background='/images/empresa.jpg'/>
                <HistoriaComponent/>
                <PicturesComponent/>
            </div>
        )
    }
};

export default EmpresaPage;