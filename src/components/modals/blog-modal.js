import React, {Component} from "react";
import ReactModal from "react-modal";

export default class BlogModal extends Component {
    constructor (props) {
        super (props); 
    }

    render () {
        return (
            <ReactModal onRequestClose={() => {
                this.props.handleModalClose();
                
                // onRequestClose allows for any clicks outside of the window or using the escape key to "exit" the modal/run the requested function
            }} isOpen={this.props.modalIsOpen}>
                <h1>
                    I'm in a modal!
                </h1>
            </ReactModal>
        )
    }
}