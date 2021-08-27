import React, { Component } from 'react';
import axios from "axios";

export default class PortfolioDetail extends Component {
    constructor(props){
        super(props);
    }

componentWillMount(){
    this.getPortfolioItem();
}


getPortfolioItem(){
    axios.get(`https://randeejohnson.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true }).then(response => {
        console.log("response", response)
    }).catch(error => {
        console.log("getportfolioitem error", error)
    })
}



    render() {
        return (
            <div>
                <div>
            <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
        </div>
            </div>
        );
    }
}



// https://randeejohnson.devcamp.space/portfolio/portfolio_items/:id