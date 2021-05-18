// components make up the application. We put together all of these components and thats what gives us the full application. Each component has its own role that can be shared across the entire application.
import React, { Component } from 'react';
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
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from "./pages/no-match"


export default class App extends Component {
  
  render() {
    return (
      <div className='app'>

      
        <Router>
          <div>
          <NavigationContainer />

          <Switch>
            {/* routes come in order of which site will check */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about-me" component={About} />
            <Route exact path="/contact-me" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route
            exact
            path="/portfolio/:slug"
            component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>

        
      </div>
    );
  }
}
