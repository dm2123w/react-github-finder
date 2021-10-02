import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
    };

    searchUsers = async (text) => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        this.setState({ users: res.data.items, loading: false });
    };

    clearUsers = () => {
        this.setState({ users: [], loading: false });
    };

    setAlert = (message, type) => {
        this.setState({ alert: { message, type } });
    };

    render() {
        return (
            <>
                <Navbar />{" "}
                <div className="container">
                    <Alert alert={this.state.alert} />
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                    />
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
