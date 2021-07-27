import React, {Component} from "react";
import ReactModal from "react-modal";

import BlogForm from "../modals/blog-form"

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor (props) {
        super (props); 

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    }

handleSuccessfulFormSubmission(blog){
    console.log("blog from blog form");
}

    render () {
        return (
            <ReactModal 
                style = {this.customStyles}
                onRequestClose={() => {
                this.props.handleModalClose();

                // onRequestClose allows for any clicks outside of the window or using the escape key to "exit" the modal/run the requested function
            }} isOpen={this.props.modalIsOpen}>
                
                    <BlogForm
                handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission} />
            </ReactModal>
        )
    }
}