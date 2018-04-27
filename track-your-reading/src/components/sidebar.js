import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ActionHome from "material-ui/svg-icons/action/home";
import "./css/sidebar.css";

function UserLink(props){
    let loggedIn = props.loggedIn;
    if(loggedIn){
        return <Link to="/dashboard">User</Link>;
    }
    return <Link to="/login">Log in</Link>;
}

function RegisterLink(props){
    let loggedIn = props.loggedIn;
    if(!loggedIn){
        return <Link to="/register">Register</Link>;
    }
    return <Link to="/logout">Log out</Link>;
}

const iconStyle = {
    marginRight: ".5em"
}

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
                    <Link to="/" className="menu-item-flex"><ActionHome style={iconStyle}/><span>Home</span></Link>
                </MenuItem>
                <MenuItem
                    onClick={this.props.toggleFn}>
                    <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem
                    onClick={this.props.toggleFn}>
                    <UserLink loggedIn={this.props.loggedIn}/>
                </MenuItem>
                <MenuItem
                    onClick={this.props.toggleFn}>
                    <RegisterLink loggedIn={this.props.loggedIn}/>
                </MenuItem>
            </Drawer> 
        );
    }
}

export default Sidebar;