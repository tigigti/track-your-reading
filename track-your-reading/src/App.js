import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

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
      <MuiThemeProvider>
        <div>
          <Navbar toggleFn={this.toggleNav.bind(this)}/>
          <Sidebar toggleFn={this.toggleNav.bind(this)} open={this.state.navOpen}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
