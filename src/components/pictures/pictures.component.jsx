import React, { Component } from "react";
import {PictureItem, PicturesContainer} from "./pictures.styles";
import { picturesData } from "../../assets/empresaContent";
import { uid } from "react-uid";
import Lightbox from "fslightbox-react";


class PicturesComponent extends Component {
    state = {
        isVisible: false,
        slide: 1,
        windowHeight: 0
    };

    showSlide = (event, slide) => {
        event.preventDefault();

        console.log(window.scrollY);
        this.setState({
            isVisible: !this.state.isVisible,
            slide: slide,
            windowHeight: window.scrollY
        });
    };

    handleOnClose = () => {
        window.scrollTo(0, this.state.windowHeight)
    };

    render () {
        return (
            <div>
                <Lightbox
                toggler={this.state.isVisible}
                slide={this.state.slide}
                sources={picturesData}
                onClose={this.handleOnClose}/>
                <PicturesContainer>
                    {picturesData.map((picture, index) =>
                        <PictureItem
                            key={uid(picture)}
                            onClick={(event) => this.showSlide(event,index + 1)}
                            src={picture}/>)}
                </PicturesContainer>
            </div>

        )
    }
}

export default PicturesComponent;