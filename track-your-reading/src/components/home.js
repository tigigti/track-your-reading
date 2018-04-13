import React, {Component} from "react";

class Home extends Component {
    render(){
        return(
            <h1>I am the homepage component - {this.props.test}</h1>
        );
    }
}

export default Home;