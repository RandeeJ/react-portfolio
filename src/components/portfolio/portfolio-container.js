import React, {Component} from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        // instantiated
this.state = {
    pageTitle: "Welcome to My Portfolio",
    isLoading: false, 
    data: []
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
    });
}

getPortfolioItems() {
    axios.get("https://randeejohnson.devcamp.space/portfolio/portfolio_items")
  .then(response => {
    // handle success
    this.setState({
        data: response.data.portfolio_items
    })
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  // NEED TO FIGURE THIS OUT
  .then( () => {
    // always executed
  });
  }


    portfolioItems() {       
        return this.state.data.map(item =>  {
            debugger; // <-- browser will see this and stop execution. will allow you to ask questions of data. gives great visibilty to see what we have access to. can run scripts and perform tasks from within the browser. essentially freezes the process and allows abiilty to run functions and process equations. But does not give access to components or state!
            return <PortfolioItem 
            key={item.id}
            title={item.name}
            url={item.url}
            slug={item.id}/>;
        });
    }

// want to click a button on the page and it should update the page title
// handlePageTitleUpdate() {
//     this.setState({
//         pageTitle: "Something Else"
//     })
// }

componentDidMount() {
    this.getPortfolioItems();
}
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