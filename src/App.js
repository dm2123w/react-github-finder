import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
    state = {
        users: [],
        loading: false,
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

    render() {
        return (
            <>
                <Navbar />{" "}
                <div className="container">
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length > 0 ? true : false}
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
