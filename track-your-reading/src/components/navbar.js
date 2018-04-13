import React from "react";
import AppBar from "material-ui/AppBar";

class Navbar extends React.Component {
    
    render(){
        return(
            <AppBar
                title="Track Your Reading"
                onLeftIconButtonClick={this.props.toggleFn}/>
        );
    }
}

export default Navbar;