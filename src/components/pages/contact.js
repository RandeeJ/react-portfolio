import React from 'react';
// import Contacts from "../contacts/contacts";
import contactMeImage from "../../../static/assets/images/auth/boy-holding-pencil-clip-art-png-clip-art.png";
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome"



export default function() {



    // this.contactName = this.contactName.bind(this);
    // this.contactNumber = this.contactNumber.bind(this)
    // this.contactAddress = this.contactAddress.bind(this)

    return (
        // constructor(){
        //     super();
        // }
        // render(
        <div className="contact-container">
            <div className ="contact-image-container"
            style={{
                background: "url(" + contactMeImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
        
            <div className="contact-info-container">
                <div className="contact-bullet-points">
                <div className="bullet-point-group">

            <div className= "icon">
                <FontAwesomeIcon icon="user-circle" /> 
            </div>
             
            <div className ="text">
                Randee Johnson
            </div>
            </div>

            <div className="bullet-point-group">
            <div className= "icon"> 
                <FontAwesomeIcon icon="phone" />
            </div>

            <div className ="text">
                123.456.7890
            </div>
            </div>


            <div className="bullet-point-group">
            <div className= "icon"> 
                <FontAwesomeIcon icon="address-book" /> 
            </div>

            <div className ="text">
                NYC, United States of America
            </div>
            </div>
            </div>
            </div>
            </div>

            
        
    );
    }