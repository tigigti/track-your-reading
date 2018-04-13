import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navOpen: false
    }
  }

  toggleNav(){
    this.setState((prev,props)=>({
      navOpen: !prev.navOpen
    }))
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Navbar toggleFn={this.toggleNav.bind(this)}/>
            <Sidebar toggleFn={this.toggleNav.bind(this)} open={this.state.navOpen}/>
            <div>
              <Route exact path="/"
                render={(props)=> <Home {...props} test="passing props"/>}
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
