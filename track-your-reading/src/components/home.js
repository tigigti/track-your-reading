import React, {Component} from "react";
import axios from "axios";
import Card from "./card";
import "./css/home.css";

var api = "http://localhost:4000/user";

function UserList(props){
    const users = props.users;
    return(
        <ul>  
            {users.map((user,index) => <li key={index}>{user}</li>)}
        </ul>
    );
};

function HomeDisplay(props){
    const loggedIn = props.loggedIn;
    if(loggedIn){
        return(
            <div className="card-container">
                <Card amount="10" subtitle="Books Read" linkTo="#booksRead"/>
                <Card amount="20" subtitle="To Read" linkTo="#toRead"/>
                <Card amount="80%" subtitle="Progress" linkTo="#progress"/>
            </div>
        );
    };
    return(
        <h1>Please log in to continue</h1>
    );
}

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: ["test 1","test 2","User 3"]
        }
    };

    addUser(){
        var newUsers = this.state.users;
        newUsers.push("Hallo Chris");
        this.setState({
            users: newUsers
        });
    };

    componentDidMount(){
        axios.get(api).then((res)=>{
            this.setState({
                users: res.data
            });
        }).catch((err)=>{
            console.log("error establishing connection to api");
        });
    };

    render(){
        return(
            <div>
                <h2>Homepage here</h2>
                {/* <UserList users={this.state.users}/>
                <button onClick={this.addUser.bind(this)}>Add User</button> */}
                <HomeDisplay loggedIn={this.props.loggedIn}/>
            </div>
        );
    };
};

export default Home;