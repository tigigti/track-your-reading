import React, {Component} from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import "./css/card.css";

class Card extends Component {

    render(){
        return(
            <div style={{
                width: "100%",
                position: "relative",
                maxWidth: "800px",
                margin: "40px auto 0 auto"}}>
                <AppBar showMenuIconButton={false} title={this.props.title} className="card-nav"/>
                <Paper style={{
                    width: "100%",
                    padding: "8px"
                }} zDepth={1}>
                    {this.props.component}
                </Paper>
            </div>
        )
    }
}

export default Card;