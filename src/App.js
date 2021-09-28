import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
    render() {
        return <Navbar title="GitHub Finder" icon="i-logo fab fa-github" />;
    }
}

export default App;
