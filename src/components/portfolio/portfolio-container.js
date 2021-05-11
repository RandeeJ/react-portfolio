import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        // instantiated
this.state = {
    pageTitle: "Welcome to My Portfolio",
    isLoading: false, 
    data: [
        {title: "Quip", category: "eCommerce"}, 
        {title: "Eventbrite", category: "Scheduling"}, 
        {title: "Ministry Safe", category: "Enterprise"}, 
        {title: "SwingAway", category: "eCommerce"}]
}   
// this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
// we are letting the program know that we want to be able to use the this function

this.handleFilter = this.handleFilter.bind(this);
// must do this for each custom filter for events
}

handleFilter(filter) {
    this.setState({
        data: this.state.data.filter(item => {
            return item.category === filter;
        })
    })
}

    portfolioItems() {       
        return this.state.data.map(item =>  {
            return <PortfolioItem title={item.title} url={"google.com"}/>; // <-- jsx
        });
    }

// want to click a button on the page and it should update the page title
// handlePageTitleUpdate() {
//     this.setState({
//         pageTitle: "Something Else"
//     })
// }

    // State
    // Lifecycle Hooks
    render() {
        if (this.state.isLoading){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2> {this.state.pageTitle}</h2>
                
                <button onClick = {() => this.handleFilter("eCommerce")}>eCommerce
                </button>
                <button onClick = {() => this.handleFilter("Scheduling")}>Scheduling
                </button>
                <button onClick = {() => this.handleFilter("Enterprise")}>Enterprise
                </button>

                {this.portfolioItems()}


                {/* <button onClick={this.handlePageTitleUpdate}> Change Title </button> */}
            </div>
        )
    }
}

// import react
// import component
// create export
// call render statement
// return that contains all code to be shown