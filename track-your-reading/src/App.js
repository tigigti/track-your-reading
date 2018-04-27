import React, { Component } from 'react';
import './App.css';
import muiTheme from "./components/customTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navOpen: true,
      loggedIn: true
    }
  }

  toggleNav(){
    this.setState((prev,props)=>({
      navOpen: !prev.navOpen
    }));
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Navbar toggleFn={this.toggleNav.bind(this)}/>
            <Sidebar loggedIn={this.state.loggedIn} toggleFn={this.toggleNav.bind(this)} open={this.state.navOpen}/>
            <div className="container">
              <Route exact path="/"
                render={(props)=> <Home {...props} loggedIn={this.state.loggedIn}/>}
              ></Route>
              <Route path="/about"
                render={()=> <h2>And about page will be here</h2>}
              ></Route>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;