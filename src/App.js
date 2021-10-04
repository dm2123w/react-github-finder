import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 5000);
    };

    return (
        <GithubState>
            <Router>
                <div className="App">
                    <Navbar />{" "}
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(props) => (
                                    <>
                                        <Search setAlert={showAlert} />
                                        <Users />
                                    </>
                                )}
                            ></Route>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/user/:login" component={User}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
};

export default App;
