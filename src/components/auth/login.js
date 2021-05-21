import React, { Component } from 'react';

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

    handleSubmit(event) {
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
    // this will pick up the event, then pick up the target, and gather the attributes.
    // must wrap this in brackets because it is a dynamic name
            });
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