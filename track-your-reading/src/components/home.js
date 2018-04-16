import React, {Component} from "react";
import axios from "axios";

var api = "http://localhost:4000/user";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get(api).then((res)=>{
            this.setState({
                users: res.data
            });
        }).catch((err)=>{
            console.log("error establishing connection to api");
        });
    }

    render(){
        return(
            <div>
                <h2>Homepage here - {this.props.test}</h2>
                <ul>
                    {this.state.users.map((user)=>{
                        return <li key={user._id}>{user.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Home;