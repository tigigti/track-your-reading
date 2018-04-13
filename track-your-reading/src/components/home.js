import React, {Component} from "react";

class Home extends Component {
    render(){
        return(
            <h2>Homepage here - {this.props.test}</h2>
        );
    }
}

export default Home;