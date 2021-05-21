import React, { Component } from 'react';
import axios from "axios";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
    // this will pick up the event, then pick up the target, and gather the attributes.
    // must wrap this in brackets because it is a dynamic name
            });
        }

        handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        {withCredentials: true}
        // when you post something, more than just the message and your personal information gets sent. it can send cookies from your system, how you created the thing being sent (ex. tweet --> repost?). server will run authorization process to check credentials.
        ) .then(response => {
            console.log("response", response);
        })
                    // since we are pushing something up - we will create a session. we are creating the ability to create a session on the server and then we will get a cookie from the server and store it directly into the browser. this will make sure that we have the ability to log in ... or nah.
                    // will expect a url, and an object that contains the email and password, and the third is the optional additional credentials.
        event.preventDefault();
            // "I do not want you to follow your default behavior"
        }
    


    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>


                <form onSubmit={this.handleSubmit}> 

                    <input 
                    type="email" 
                    // type is something specific to html
                    name="email"
                    // name is something that we can change to whatever we want
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />


                    <input type="password" 
                    type="password" 
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}