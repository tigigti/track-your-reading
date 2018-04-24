import React, {Component} from "react";
import Paper from "material-ui/Paper";
import "./css/card.css";

const style = {
    padding: "5px 10px",
    marginBottom: 20
}

class Card extends Component {
    render(){
        return(
            <a href={this.props.linkTo}>  
                <Paper className="change-on-hover" style={style} zDepth={1}>
                    <h1>{this.props.amount}</h1>
                    <h3>{this.props.subtitle}</h3>
                </Paper>
            </a>
        );
    };
};

export default Card;