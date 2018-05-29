import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ActionHome from "material-ui/svg-icons/action/home";
import Code from "material-ui/svg-icons/action/code";
import Lock from "material-ui/svg-icons/action/lock";
import LockOpen from "material-ui/svg-icons/action/lock-open";
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import "./css/sidebar.css";

function UserLink(props){
    let loggedIn = props.loggedIn;
    if(loggedIn){
        return <Link to="/dashboard" className="menu-item-flex"><ActionAccountCircle style={iconStyle}/><span>User</span></Link>;
    }
    return <Link to="/login" className="menu-item-flex"><Lock style={iconStyle}/><span>Log in</span></Link>;
}

function RegisterLink(props){
    let loggedIn = props.loggedIn;
    if(!loggedIn){
        return <Link to="/register" className="menu-item-flex"><ActionAccountCircle style={iconStyle}/><span>Register</span></Link>;
    }
    return <Link to="/logout" className="menu-item-flex"><LockOpen style={iconStyle}/><span>Log out</span></Link>;
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
                    <Link to="/about" className="menu-item-flex"><Code style={iconStyle}/><span>About</span></Link>
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