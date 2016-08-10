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
                <Education />
                <footer className="App__footer">
                    <small>&copy; Copyright 2016 - built with React and various web technologies for fun and learning</small>
                </footer>
            </div>
        );
    }
}

export default App;
