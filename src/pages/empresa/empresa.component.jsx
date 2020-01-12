import React, {Component} from "react";
import ParallaxHeaderComponent from "../../components/parallax-header/parallax-header.component";
import PicturesComponent from "../../components/pictures/pictures.component";
import HistoriaComponent from "../../components/historia/historia.component";

class EmpresaPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
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