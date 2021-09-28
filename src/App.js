import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
    render() {
        return (
            <>
                <Navbar /> <UserItem />
            </>
        );
    }
}

export default App;
