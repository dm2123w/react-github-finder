import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
    state = {
        users: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get("https://api.github.com/users");
        this.setState({ users: res.data, loading: false });
    }

    render() {
        return (
            <>
                <Navbar />{" "}
                <div className="container">
                    <Users
                        users={this.state.users}
                        loading={this.state.loading}
                    />
                </div>
            </>
        );
    }
}

export default App;
