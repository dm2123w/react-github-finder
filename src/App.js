import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
    render() {
        return (
            <>
                <Navbar /> <Users />
            </>
        );
    }
}

export default App;
