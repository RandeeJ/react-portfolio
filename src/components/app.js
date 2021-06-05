import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }


  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials:true
      })
      .then(
        response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;
        console.log("See meee", loggedIn, response);


        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizePages() {
    return [
      <Route path="/portfolio-manager" component={PortfolioManager} />
      ]
  }



  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />


            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizePages()) : null}

              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}



// // components make up the application. We put together all of these components and thats what gives us the full application. Each component has its own role that can be shared across the entire application.
// import React, { Component } from 'react';
// import { 
//   BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import axios from 'axios';

// import NavigationContainer from "./navigation/navigation-container";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Blog from "./pages/blog";
// import PortfolioDetail from "./portfolio/portfolio-detail";
// import Auth from "./pages/auth";
// import NoMatch from "./pages/no-match";


// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN"
//       };

//       this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
//       this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
//   }  

//   handleSuccessfulLogin() {
//     this.setState({loggedInStatus: "LOGGED_IN"
//     });
//   }

//   handleUnsuccessfulLogin() {
//       this.setState({loggedInStatus: "NOT_LOGGED_IN"
//       });
//     }

//     // making a get request. passing in API link, followed by "with credentials: true" as an object. axios returns a promise.

//   checkLoginStatus() {
//      axios.get("https://api.devcamp.space/logged_in", {
//       withCredentials: true
//     })
//     .then(response => {
//       console.log("logged_in status", response);
//       const loggedIn = response.data.logged_in;
//       const loggedInStatus = this.state.loggedInStatus;

//       // If loggedIn and status LOGGED_IN => return data (log in)
//       // If loggedIn and status NOT_LOGGED_IN => uupdate state (log in)
//       // If not loggedIn  and status LOGGED_IN => update state (log out)

//       if (loggedIn && loggedInStatus === "LOGGED_IN") {
//         return loggedIn;
//       }
//       else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
//         this.setState({
//           loggedInStatus: "LOGGED_IN"
//         });
//       } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
//         this.setState({
//           loggedInStatus: "NOT_LOGGED_IN"
//         });
//       }
      
//     })
//     .catch(error => {
//       console.log("error", error);
//     })
//   }

//   componentDidMount() {
//     this.checkLoginStatus();
//   }


//   render() {
//     return (
//       <div className='container'>
//         <Router>
//           <div>
//           <NavigationContainer />

//           <h2> {this.state.loggedInStatus}</h2>

//           <Switch>
//             {/* routes come in order of which site will check */}
//             <Route exact path="/" component={Home} />

//             <Route
//               exact path="/auth"
//               render={props => (
//                 <Auth 
//                   {...props}
//                   handleSuccessfulLogin={this.handleSuccessfulLogin}
//                   handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
//                   />
//                 )} 
//               />

//             <Route exact path="/about-me" component={About} />
//             <Route exact path="/contact-me" component={Contact} />
//             <Route exact path="/blog" component={Blog} />
//             <Route
//             exact
//             path="/portfolio/:slug"
//             component={PortfolioDetail} />
//             <Route component={NoMatch} />
//           </Switch>
//           </div>
//         </Router>

        
//       </div>
//     );
//   }
// }
