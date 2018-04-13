import React, {Component} from "react";

class Home extends Component {
    testCmp = 
        <div>
            <h3>This is the homepage in a card</h3>
            <h3>And a subheading too!</h3>
        </div>;

    render(){
        return(
            <h2>Homepage here - {this.props.test}</h2>
        );
    }
}

export default Home;