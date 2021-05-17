import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div className ="nav-wrapper">
                <div className="left-side">
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/about-me" activeClassName="nav-link-active">
                    About
                </NavLink>
                <NavLink to="/contact-me" activeClassName="nav-link-active">
                    Contact
                </NavLink>
                <NavLink to="/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>
                {false ? <NavLink to="/add-blog" activeClassName="nav-link-active">
                    Add Blog
                </NavLink> : null}
                </div>

                <div className="right-side">
                    RANEE JOHNSON
                </div>
                
            </div>
        )
    }
}