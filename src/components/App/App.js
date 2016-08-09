import React, { Component } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AboutMe />
                <Experience />
                <Education education={[]} />
            </div>
        );
    }
}

export default App;
