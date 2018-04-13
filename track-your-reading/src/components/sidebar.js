import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import "./css/sidebar.css";

class Sidebar extends React.Component {

    render(){
        return(
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
        );
    }
}

export default Sidebar;