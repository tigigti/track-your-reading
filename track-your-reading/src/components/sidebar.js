import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class Sidebar extends React.Component {

    render(){
        return(
            <Router>
               <Drawer
                docked={false}
                open={this.props.open}
                className="sidebar-nav"
                onRequestChange={this.props.toggleFn}>
                    <MenuItem
                        onClick={this.props.toggleFn}>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem
                        onClick={this.props.toggleFn}>
                        <Link to="/about">About</Link>
                    </MenuItem>
                </Drawer> 
            </Router>
        );
    }
}

export default Sidebar;