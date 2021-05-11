// components make up the application. We put together all of these components and thats what gives us the full application. Each component has its own role that can be shared across the entire application.
import React, { Component } from 'react';
import moment from "moment"
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"


export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <h1>Randee Johnson's React Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <Router>
          <div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-me" component={About} />
            <Route exact path="/contact-me" component={Contact} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
          </div>
        </Router>

        
      </div>
    );
  }
}
