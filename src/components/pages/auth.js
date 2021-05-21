import React, { Component } from 'react';
import loginImage from "../../../static/assets/images/auth/IMG_1752.jpg";
// can import the image under any variable name

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                    className="left-column" 
                 // style expects objects and javasript - so use double {{}}

                    style={{
                        backgroundImage: `url(${loginImage})`
                    }}
                />
                
                <div className="right-column">
                    <h1>Login component goes here...</h1>
                </div>

            </div>
        );
    }
}